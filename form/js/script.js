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
})