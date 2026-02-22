const $windowWidth = $(window).width();
const userAgent = navigator.userAgent;

if ($windowWidth > 768 || userAgent.indexOf('iPad') > 0) {
  var photoNumber = 16;
} else {
  var photoNumber = 4;
}

$('.js-slider-navigation-item:first').addClass('-is-current');

$('#js-slider-navigation').each(function () {
  if ($windowWidth > 768 || userAgent.indexOf('iPad') > 0) {
    do {
      $(this).children('.js-slider-navigation-item:lt(' + photoNumber + ')').wrapAll('<div class="js-sliderNavigation-wrap c-slider-case-nav__inner creafix"></div>');
    } while ($(this).children('.js-slider-navigation-item').length);
  }
});

//ナビゲーション画像をclickしたらメインスライダーを動かす
$('.js-slider-navigation-item').click(function () {
  let target = $(this).data('navigation');
  $('#js-slider-for').slick('slickGoTo', target);
});

//メインスライダーをclickしたらナビゲーション画像を動かす
$('#js-slider-for').on('afterChange', function (slick, currentSlide) {
  var $current_slide = $('#js-slider-for').slick('slickCurrentSlide');
  if ($windowWidth > 768 || userAgent.indexOf('iPad') > 0) {
    var $slideNum = Math.floor($current_slide / photoNumber);
  } else {
    var $slideNum = $current_slide;
  }
  $('#js-slider-navigation').slick('slickGoTo', $slideNum);
  var currentNum = $current_slide;
  var thumbNum = $('.js-slider-navigation-item').data('navigation');
  console.log(currentNum);

  //スライドと同時にサムネのセレクト表示
  $('.js-slider-navigation-item').removeClass('-is-current');
  $(".js-slider-navigation-item[data-navigation='" + currentNum + "']").addClass('-is-current');

});

if ($windowWidth > 768 || userAgent.indexOf('iPad') > 0) {
  var $prevArrow = '<use xlink: href="#circle-arrow-left"></use>';
  var $nextArrow = '<use xlink: href="#circle-arrow-right"></use>';
} else {
  var $prevArrow = '<use xlink: href="#circle-arrow-left_white"></use>';
  var $nextArrow = '<use xlink: href="#circle-arrow-right_white"></use>';
}

{/* <svg class="icon-arrow" role="img" aria-labelledby="exhibitor"><use xlink: href="#cricle-arrow-below"></use></svg > */}


$('#js-slider-for').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  fade: true,
  // prevArrow: '<button class="slide-arrow prev-arrow keyVisual-arrow -hover-opacity"><svg class="icon-arrow" role="img" aria-labelledby="">' + $prevArrow + '</svg></button>',
  // nextArrow: '<button class="slide-arrow next-arrow keyVisual-arrow -hover-opacity"><svg class="icon-arrow" role="img" aria-labelledby="">' + $nextArrow + '</svg></button>'
});

$('#js-slider-navigation').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      // centerPadding: '10px',
      infinite: false,
      swipeToSlide: true,
    }
  }
  ]
  // asNavFor: '#js-slider-for',
}); 