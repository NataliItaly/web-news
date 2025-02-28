import RouterHandler from "./router.js";

window.addEventListener("hashchange", function (e) {
  const hash = window.location.hash; //e.newURL.split("#")[1];
  //console.log("window hash", window.location.hash);
  const headerLinks = document.querySelectorAll(".header__link");

  headerLinks.forEach((link) => {
    link.classList.remove("header__link_active");
    if (link.getAttribute("href") === `#${hash}`) {
      link.classList.add("header__link_active");
    }
  });
});

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
