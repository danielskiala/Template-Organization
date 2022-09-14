let speed = 4500;
let speed_3 = 2000;
var swiper = new Swiper(".swiper-carousel", {
    loop:true,
    autoplay:{
      delay:speed,
      disableOnInteraction:false
    },
    centerSlide: 'true',
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper_2 = new Swiper(".swiper-actu", {
    loop:true,
    autoplay:true,
    centerSlide: 'true',
    spaceBetween:20,
    slidesPerView: 3,
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
      0:{
        slidesPerView : 1
      },
      520:{
        slidesPerView : 2
      },
      950:{
        slidesPerView : 3
      }
    }
  });

  var swiper_3 = new Swiper(".swiper-team", {
    loop:true,
    autoplay:{
      delay:speed_3,
      disableOnInteraction: false
    },
    centerSlide: 'true',
    spaceBetween:15,
    slidesPerView: 3,
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
      0:{
        slidesPerView : 1
      },
      520:{
        slidesPerView : 2
      },
      950:{
        slidesPerView : 3
      }
    }
  });

  var swiper_4 = new Swiper(".swiper-partenair", {
    loop:true,
    autoplay:true,
    centerSlide: 'true',
    spaceBetween:20,
    slidesPerView: 5,
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
      0:{
        slidesPerView : 2
      },
      520:{
        slidesPerView : 3
      },
      950:{
        slidesPerView : 4
      }
    }
  });

  function change_speed(speed, speed_3){
    swiper.params.autoplay.delay = speed;
    swiper_3.params.autoplay.delay = speed_3;
  }

 