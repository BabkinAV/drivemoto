$(function(){

    // *************slick slider***********
    $('.banner-section__slider').slick({
        dots: true,
         prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>', 
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    // ****************tabs***************
    $('.tab').on('click', function(e) {

        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    // ****************heart functionality**************

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite--active')
    });

    // **************favorite product slider*************

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>', 
    });

    // ***************form styler**************************
    $('.filter-style').styler(); 

    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });

    // *****************range slider pluging**************
    $(".js-range-slider").ionRangeSlider({
    });

    // *******************filter buttons functionality***********

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');

    }); 

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');

    }); 

    // ******************star rating*****************
    $(".rate-Yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        starWidth: "23px",
        fullStar: true,
        spacing: "5px"
      });

    //   *******************mobile menu******************
    $('.menu__btn').on('click', function() {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });
});