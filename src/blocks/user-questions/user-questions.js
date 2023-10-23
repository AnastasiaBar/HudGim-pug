import ready from "../../js/utils/documentReady.js";

ready(function () {
  let card = document.querySelectorAll(".user-questions__item");

  card.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});
