import ready from "../../js/utils/documentReady.js";
import { closeModalWindow } from "../../js/script";

ready(function () {
  const closeMenu = document.querySelector(".modal-window__cross");
  const overlay = document.querySelector(".overlay");
  const modalWindow = document.querySelector(".modal-window");

  closeMenu.addEventListener("click", () => {
    closeModalWindow(overlay, modalWindow);
  });
});
