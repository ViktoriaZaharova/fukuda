let pagingInfo = $('.news-slider__nav .counter-slide');
let teamSlider = $('.news-slider');

teamSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + '/ ' + prefixAll + slick.slideCount + '</span>');
});


$('.news-slider').slick({
    slidesToShow: 4,
    appendArrows: '.news-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
});

let pagingInfo2 = $('.leaders-slider__nav .counter-slide');
let teamSlider2 = $('.leaders-slider');

teamSlider2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo2.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + '/ ' + prefixAll + slick.slideCount + '</span>');
});

$('.leaders-slider').slick({
    slidesToShow: 1,
    appendArrows: '.leaders-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
});

let pagingInfo3 = $('.catalog-slider__nav .counter-slide');
let teamSlider3 = $('.catalog-slider');

teamSlider3.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo3.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + '/ ' + prefixAll + slick.slideCount + '</span>');
});

$('.catalog-slider').slick({
    slidesToShow: 1,
    appendArrows: '.catalog-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
});


let pagingInfo4 = $('.product-slider__nav .counter-slide');
let teamSlider4 = $('.product-slider');

teamSlider4.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo4.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + '/ ' + prefixAll + slick.slideCount + '</span>');
});

$('.product-slider').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.product-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
});

$(".countdown-time").countdowntimer({
    dateAndTime: "2021/04/21 00:00:00",
    labelsFormat: false,
    displayFormat: "HMS",
});