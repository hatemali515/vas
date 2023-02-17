$(document).ready(function(){
    $('header nav ul li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1500);
    });

    $(".icon").click(function(){
        $(".nav-list").slideToggle(1000);
    });

    $('.read').click(function(){
        $('.about-desc').slideToggle(1500);
    });

    $('.contact .contact-us .contact-left .accordion h4').click(function(){
        $(this).next().slideToggle(1000);
        $('.contact .contact-us .contact-left .accordion p').not($(this).next()).slideUp(1000);
    });

    $('.james').click(function(){
        $('.f1 .tow').slideDown(1000).siblings().slideUp(1000);
        $('.cancel').slideDown();
    });
    $('.cancel').click(function(){
        $('.f1 .one').slideDown(1000).siblings().slideUp(1000);
        $(this).slideUp();
    });
});
