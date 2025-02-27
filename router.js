//import Navigo from "navigo";
import Stories from "./pages/stories.js";
import Item from "./pages/item.js";
//const Navigo = require("navigo");
const router = new Navigo("/", { hash: true });
console.log(router);

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Stories },
      { path: "/new", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/show", page: Stories },
      { path: "/favorites", page: Stories },
      { path: "/item", page: Item },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
