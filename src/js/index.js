// Import our custom CSS
import "../css/styles.css";

// import components
import "./components/index";

// Import javascript file as needed
import * as bootstrap from "bootstrap";
import Dashboard from "./pages/dashboard";
import Add from "./pages/add";

const routes = {
  "/": Dashboard,
  "/add.html": Add,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
