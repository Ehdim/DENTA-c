function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.3774315, lng: 49.8541026 },
    scrollwheel: false,
    zoom: 17
  });
}
$(document).ready(function () {
 
 var arr_h=["HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT",'AFFORDABLE PEDIATRIC DENTISTRY SERVICES',"WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"]
 var arr_p=["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.","We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.","Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."]
$('#header .spans div').click(function(){
  $(this).toggleClass('active');
  if($(this).hasClass('active')){
    $(this).removeClass('active')
  }else{
    $(this).addClass('active')
  }
})
 $('#header .spans div').eq(0).click(function(e){
   $("#header").css({'background-image':'url(img/pages/typography-01-770x420.jpg)',
  'transition':'.009s'
});
   $('#header .text h2').text(arr_h[0]);
   $('#header .text h4').text(arr_p[0]);
 })
  $('#header .spans div').eq(1).click(function(e){
   $("#header").css({'background-image':'url(img/pages/services-01-870x440.jpg)',
'transition':'.009s'  
});
   $('#header .text h2').text(arr_h[1]);
   $('#header .text h4').text(arr_p[1]);
 })
  $('#header .spans div').eq(2).click(function(e){
   $("#header").css({'background-image':'url(img/pages/services-06-870x440.jpg)',
  'transition':'.009s'
});
   $('#header .text h2').text(arr_h[2]);
   $('#header .text h4').text(arr_p[2]);
 })
  $("#gallery1").owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $("#gallery2").owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3
      }
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

// $(document.body).click(function(){
//   if($('.js-side').hasClass('active')){
//     $('.js-side').removeClass('active');
    
//   }
 
// })
$('.bar_item').click(function(e){
  $(this).toggleClass("active");
  $(this).find(".fa").toggleClass("fa-bars");
  $(this).find(".fa").toggleClass("fa-close");
  $(".js-side").toggleClass('active');
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
});

$('.respo-click').click(function(e){
  $(this).toggleClass("active");
  $(this).toggleClass("fa-bars");
  $(this).toggleClass("fa-arrow-left");
  $(".js-side").toggleClass('active').css({
    'top':'70px'
  });
})