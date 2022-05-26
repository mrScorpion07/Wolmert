$(function () {
    'use strict';

    // Banner Slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });

    // Customer support Slider
    $('.cus_sup_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });


    // sticky menu
    var navOff = $('.navigation').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.navigation').addClass('menu-fix');
        } else {
            $('.navigation').removeClass('menu-fix');
        }
    });

    // increment decrement handle counter index page
    $('#handleCounter').handleCounter();


    //=============zoom count down start=================

    $('.zoom_count_down').countdown('2023/01/01', function (event) {
        $(this).html(event.strftime('%D days, %H : %M : %S'));
    });

    // Hide button
    $('.hide').click(function () {
        $('.btn-body').fadeOut();
    });

    // show button
    $('.show').click(function () {
        $('.btn-body').toggle(200);

    });

    // Zoom left Slider
    $('.zoom_left_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });

    // Zoom Right Seller Slider
    $('.seller_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });

    // Mixit It up
    var containerEl = document.querySelector('.mixit_up');
    var mixer = mixitup(containerEl)


    // Client support Slider
    $('.client_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // Back To Top
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('#bc_top').fadeIn();
        } else {
            $('#bc_top').fadeOut();
        }
    });
});