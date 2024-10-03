document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const closeBtn = document.querySelector(".nav__close");
  const headerBlock = document.querySelector(".header__block");
  const body = document.querySelector("body");

  changeStatusHeaderBlock();

  window.addEventListener("resize", () => {
    changeStatusHeaderBlock();
  });

  menuBar.addEventListener("click", () => {
    headerBlock.classList.add("header__block--active");
    headerBlock.classList.remove("header__block--inactive");
    body.style.overflowY = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    headerBlock.classList.remove("header__block--active");
    headerBlock.classList.add("header__block--inactive");
    body.style.overflowY = "unset";
  });

  function changeStatusHeaderBlock() {
    if (window.innerWidth <= 1023) {
      headerBlock.classList.remove("header__block--active");
      headerBlock.classList.add("header__block--inactive");
      body.style.overflowY = "unset";
    } else {
        headerBlock.classList.remove("header__block--inactive");
    }
  }
});
