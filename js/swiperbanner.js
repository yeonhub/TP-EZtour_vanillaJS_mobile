var swiper = new Swiper(".pack_aside_banner_roll", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".packmain_banner_roll", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".packmain_info", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
});

var swiper = new Swiper(".tourVis_roll", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".tour_packtour_roll", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".tour_main", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
});