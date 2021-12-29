$(document).ready(function(){
  $(".home").click(function(){
    window.location.href = 'index.html'
  });
  $(".back").click(function(){
    window.location.href = 'index.html'
  });
  $(".cont4 a").fancybox();

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

  function swiper2(n){
    var swiper1 = new Swiper(".mySwiper2", {
      slidesPerView: n,
      spaceBetween: 30,
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
    swiper2(1);
  } 
  else if($(window).width() >= 400 && $(window).width() < 700){
    swiper1(3);
    swiper2(2);
  }
  else if(window.innerWidth >= 700 && window.innerWidth < 1280){
    swiper1(4);
    swiper2(3);
  }
  else if(window.innerWidth >= 1280){
    swiper1(2);
    swiper2(1);
  }
 

  $(window).resize(function (){ 
    if (window.innerWidth < 400) {
      swiper1(2);
      swiper2(1);
    } 
    else if(window.innerWidth >= 400 && window.innerWidth < 700){
      swiper1(3);
      swiper2(2);
    }
    else if(window.innerWidth >= 700 && window.innerWidth < 1280){
      swiper1(4);
      swiper2(3);
    }
    else if(window.innerWidth >= 1280){
      swiper1(2);
      swiper2(1);
    }
  });

});