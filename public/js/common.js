//タブ切り替え
$(function(){
  $('.js-tab-controller').click(function() {
    let selected = $(this).attr('aria-controls');
    $('.js-tab-controller').attr('aria-selected', 'false');
    $(this).attr('aria-selected','true');
    $('.js-tab-panel__item').attr('aria-hidden','true');
    $('#' + selected).attr('aria-hidden', 'false');
  });

  $(function () {
    $('.js-matchHeight').matchHeight();
  });
  
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('iPad') > 0) {
    $('meta[name="viewport"]').attr('content', 'width=1366px');
  }

  //header
  const $header = $('#js-header');
  $(window).on('scroll load',function(){
    let $scroll = $(window).scrollTop();
    if($scroll > $header.height()) {
      $header.addClass('-is-scroll');
    } else {
      $header.removeClass('-is-scroll');
    }
  });

  if($(window).width() < 768) {
    $('#js-globalNav-controller').on('click', function () {
      $header.toggleClass('-is-open');
      $('body').toggleClass('-is-open');
    });
	}
	
	let param = location.search;
	let id = param.slice(4); 
	console.log(param);
	if(param) {
		var $target = $("#" + id);
		var $position = $target.offset().top - $('#js-header').height();
    $("html, body").animate({ scrollTop: $position }, 500, "swing");
    return false;		
	}


  $('.js-smooth-scroll').click(function () {
    var speed = 500;
    var $href = $(this).attr("href");
    var $target = $($href == "#" || $href == "" ? 'html' : $href);
		var $position = $target.offset().top - $('#js-header').height();
    $("html, body").animate({ scrollTop: $position }, speed, "swing");
    return false;
  });


});

window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable',{
		scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
		i18n: {
			scrollable: 'スクロールできます'
		}		
	});
});
