import ready from "../../js/utils/documentReady.js";

ready(function () {
  var rev = $(".clients__slider");
  rev
    .on("init", function (event, slick) {
      var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
      addClass(next, next2, prev, prev2);
      cur
        .removeClass("clients__slider-snext")
        .removeClass("clients__slider-sprev")
        .removeClass("clients__slider-snext2")
        .removeClass("clients__slider-sprev2");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var cur = $(slick.$slides[nextSlide]),
        next,
        prev;
      removeClass(slick.$next, slick.$next.next(), slick.$prev, slick.$prev.prev());
      next = cur.next();
      prev = cur.prev();
      addClass(next, next.next(), prev, prev.prev());
      slick.$prev = prev;
      slick.$next = next;
      cur
        .removeClass("clients__slider-snext")
        .removeClass("clients__slider-sprev")
        .removeClass("clients__slider-snext2")
        .removeClass("clients__slider-sprev2");
    });

  rev.slick({
    speed: 300,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    swipe: true,
    prevArrow: $(".clients__arrow-prev"),
    nextArrow: $(".clients__arrow-next"),
  });

  function addClass(next, next2, prev, prev2) {
    prev.addClass("clients__slider-sprev");
    next.addClass("clients__slider-snext");
    prev2.addClass("clients__slider-sprev2");
    next2.addClass("clients__slider-snext2");
  }

  function removeClass(next, next2, prev, prev2) {
    prev.removeClass("clients__slider-sprev");
    next.removeClass("clients__slider-snext");
    prev2.removeClass("clients__slider-sprev2");
    next2.removeClass("clients__slider-snext2");
  }
});
