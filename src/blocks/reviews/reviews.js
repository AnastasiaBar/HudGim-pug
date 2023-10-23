import ready from "../../js/utils/documentReady.js";

ready(function () {
  $(".reviews__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".reviews__arrow-prev"),
    nextArrow: $(".reviews__arrow-next"),
  });
});
