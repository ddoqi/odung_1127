// import { Swiper } from "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js";

export const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
