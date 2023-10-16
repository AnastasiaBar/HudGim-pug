import ready from "../../js/utils/documentReady.js";
import "../../js/script";
import { closeBurgerMenu } from "../../js/script";

ready(function () {
  const openModal = document.querySelectorAll(".open-modal-window");
  const overlay = document.querySelector(".overlay");
  const modalWindow = document.querySelector(".modal-window");
  const burgerBtn = document.querySelector(".burger__button");
  const burgerMenu = document.querySelector(".burger__menu");

  openModal.forEach((item) => {
    item.addEventListener("click", () => {
      closeBurgerMenu(burgerMenu, burgerBtn, overlay);
      modalWindow.classList.add("modal-window--active");
      setTimeout(() => {
        overlay.classList.add("overlay--active");
      });
    });
  });
});
