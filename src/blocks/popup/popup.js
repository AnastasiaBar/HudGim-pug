import ready from "../../js/utils/documentReady.js";

ready(function () {
  let modalButtons = document.querySelectorAll(".js-open-popup"),
    overlay = document.querySelector(".overlay"),
    closeButtons = document.querySelectorAll(".popup__cross");

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      let modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');

      modalElem.classList.add("popup--active");
      overlay.classList.add("overlay--active");
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      let parentModal = this.closest(".popup");
      parentModal.classList.remove("popup--active");
      overlay.classList.remove("overlay--active");
    });
  });
});
