import ready from "../../js/utils/documentReady.js";

ready(function () {
  let ymaps = window.ymaps;
  function init() {
    new ymaps.Map("map", {
      center: [55.870865, 37.664033],
      zoom: 14,
    });
  }

  ymaps.ready(init);
});
