var swiper = new Swiper(".swiper-carousel", {
    loop:true,
    autoplay:true,
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
  });

  var swiper_3 = new Swiper(".swiper-team", {
    loop:true,
    autoplay:true,
    centerSlide: 'true',
    spaceBetween:15,
    slidesPerView: 3,
    fade:'true',
    grabCursor:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 