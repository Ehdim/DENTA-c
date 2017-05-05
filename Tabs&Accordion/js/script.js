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
$(".js_inner i").eq(0).click(function (e) {
    $(".js_inner .js__inner").eq(0).toggleClass("active1");
  })
  $(".js_inner i").eq(1).click(function (e) {
    $(".js_inner .js__inner").eq(1).toggleClass("active1");
  })
    $(".js_inner i").eq(2).click(function (e) {
    $(".js_inner .js__inner").eq(2).toggleClass("active1");
  })
$('.respo-click').click(function(e){
  $(this).toggleClass("active");
  $(this).toggleClass("fa-bars");
  $(this).toggleClass("fa-arrow-left");
  $(".js-side").toggleClass('active').css({
    'top':'70px'
  });
})
//classic tabs
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	//classic tabin sonu
  //vertical tabs
  {
    $().ready(function(){
  $('.tab-title>a').click(function(e){
    e.preventDefault();
    var index = $(this).parent().index();
    $(this).parent().addClass('active')
         .siblings().removeClass('active')
         .parent('ul.tabs').siblings('.tabs-content').children('.content').removeClass('active')
         .eq(index).addClass('active');
  });
})
  }
  //classic acordion
  $(document).ready(function(){
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }
    
  });
});

})