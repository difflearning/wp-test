document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".top-bar__menu-button");
  const navBar = document.querySelector(".nav-bar");

  console.log("button:", menuButton);

  if (!menuButton || !navBar) return;

  menuButton.addEventListener("click", () => {
    console.log("hello clicked");

    const isOpen = navBar.classList.toggle("nav-bar--active");

    document.body.classList.toggle("no-scroll", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);
  });
});