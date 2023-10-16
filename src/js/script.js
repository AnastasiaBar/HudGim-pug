import ready from "../js/utils/documentReady.js";
//import getScrollSize from "../js/utils/getScrollSize.js";

ready(function () {});

//функция для закрытия модального окна
export const closeModalWindow = (overlay, modalWindow) => {
  overlay.classList.remove("overlay--active");
  modalWindow.classList.remove("modal-window--active");
};

export const closeBurgerMenu = (burgerMenu, burgerBtn, overlay) => {
  burgerBtn.classList.remove("burger__button--active");
  burgerMenu.classList.remove("burger__menu--active");
  overlay.classList.remove("overlay--active");
};
