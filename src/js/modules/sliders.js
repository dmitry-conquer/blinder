import Swiper, { Navigation, Pagination, Autoplay, Parallax } from "swiper";

if (document.querySelector(".main-page-slider")) {
  new Swiper(".main-page-slider", {
    modules: [Navigation, Pagination, Autoplay, Parallax],
    wrapperClass: "main-page-slider-wrap",
    slideClass: "main-page-slider-slide",
    slidesPerView: "auto",
    spaceBetween: 150,
    speed: 1200,
    //  loop: true,
    //  loopedSlides: 2,
    centeredSlides: false,
    // parallax: true,
    // watchOverflow: false,
    //autoHeight: true,
    // watchSlidesProgress: true,

    // Effects
    //effect: 'fade',
    autoplay: {
     delay: 3000,
     disableOnInteraction: false,
     pauseOnMouseEnter: true,
    },

    navigation: {
      prevEl: ".prev-btn",
      nextEl: ".next-btn",
    },

    breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 15,
      },
      576: {
         slidesPerView: 1.3,
         spaceBetween: 30,
      },
      768: {
         slidesPerView: 1.3,
         spaceBetween: 30,
      },
      1024: {
         slidesPerView: 1.6,
         spaceBetween: 50,
      },
      1280: {
         slidesPerView: "auto",
         spaceBetween: 150,
      },
    },
  });
}
