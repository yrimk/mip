$(document).ready(function(){
  $(".home").click(function(){
    window.location.href = 'index.html'
  });

  function swiper1(n){
    var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: n,
      spaceBetween: 30,
      slidesPerGroup: n,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  }
  
  if ($(window).width() < 400) {
    swiper1(2);
  } 
  else if($(window).width() >= 400 && $(window).width() < 700){
    swiper1(3);
  }
  else if($(window).width() >= 700){
    swiper1(4);
  }
 

  $(window).resize(function (){ 
    if (window.innerWidth < 400) {
      swiper1(2);
    } 
    else if(window.innerWidth >= 400 && window.innerWidth < 700){
      swiper1(3);
    }
    else if(window.innerWidth >= 700){
      swiper1(4);
    }
  });

});