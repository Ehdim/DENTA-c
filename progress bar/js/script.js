$(document).ready(function(){
$('.pages_hover').hover(
    function(){$('.nav-mega').toggleClass('active').css('transition-delay','.2s')},
    function(){$('.nav-mega').toggleClass('active').css('transition-delay','1s')}
)
$('.droping').hover(
    function(){$('.drop').toggleClass('active').css('transition-delay','.2s')},
    function(){$('.drop').toggleClass('active').css('transition-delay','1s')}
)
$('.droping1').hover(
    function(){$('.drop1').toggleClass('active').css('transition-delay','.2s')},
    function(){$('.drop1').toggleClass('active').css('transition-delay','1s')}
)
 $(window).scroll(function(){
     if($(this).scrollTop()>100){
         $('.js-nav-bar').addClass('active');
         $('.nav-bar').addClass('activate');
         $('.nav-mega').css('margin-top','60px');
         $('.galery-dropdown').css('margin-top','150px');
         $('.galery-dropdown1').css('margin-top','150px');
     }else{
         $('.js-nav-bar').removeClass('active');
         $('.nav-bar').removeClass('activate');
         $('.nav-mega').css('margin-top','108px');
         $('.galery-dropdown').css('margin-top','101px');
         $('.galery-dropdown1').css('margin-top','101px');
     }
 })


$('.search-click').click(function(e){
  $('.ul-nav').toggleClass("deactive");
  $('.nav-bar .search').find(".fa").toggleClass("fa-close").css({'float':'right','margin-right':'0px'});
  $('.nav-bar .search').find(".fa").toggleClass("fa-search");
  $('.inner-text').toggleClass('js-in');
})


  $(".js-scrolltop").click(function () {
    $(document.body).animate({
      scrollTop: 0
    }, 300);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 395) {
      $(".js-scrolltop").addClass("active");
    } else {
      $(".js-scrolltop").removeClass("active");
    }
  });

//responsiv menu
$('.respo-click').click(function(e){
  $(this).toggleClass("active");
  $(this).toggleClass("fa-bars");
  $(this).toggleClass("fa-arrow-left");
  $(".js-side").toggleClass('active').css({
    'top':'70px'
  });
})
 $(".js_inner i").eq(0).click(function (e) {
    $(".js_inner .js__inner").eq(0).toggleClass("active1");
  })
  $(".js_inner i").eq(1).click(function (e) {
    $(".js_inner .js__inner").eq(1).toggleClass("active1");
  })
    $(".js_inner i").eq(2).click(function (e) {
    $(".js_inner .js__inner").eq(2).toggleClass("active1");
  })
//progres bar yumru
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
//sonu
//skill bars
$(".skills").addClass("active")
$(".skills .skill  span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
//progress

})

