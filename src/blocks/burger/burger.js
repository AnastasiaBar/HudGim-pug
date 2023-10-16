import ready from "../../js/utils/documentReady.js";
import { closeBurgerMenu } from "../../js/script";

ready(function () {
  const burgerBtn = document.querySelector(".burger__button");
  const burgerMenu = document.querySelector(".burger__menu");
  const overlay = document.querySelector(".overlay");
  let num = 0;

  burgerBtn.addEventListener("click", () => {
    num = 0;
    stateHeaderMenu();
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__menu--active") && num > 0) {
      if (burgerMenu.classList.contains("burgerMenu--active") === false && num > 0) {
        closeBurgerMenu(burgerMenu, burgerBtn, overlay);
      }
    }
  });

  function stateHeaderMenu() {
    burgerBtn.classList.add("burger__button--active");
    overlay.classList.add("overlay--active");
    burgerMenu.classList.add("burger__menu--active");

    setTimeout(() => {
      num = 1;
    }, 0);
  }
});
