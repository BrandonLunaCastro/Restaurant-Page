import "./style.css";
import Home from "./home.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import Contact from "./contact.js";
import { Header as header } from "./header.js";

const content = document.getElementById("content");
document.body.className = "flex flex-col bg-lime-50 text-sky-950 h-screen ";
content.className = "flex flex-auto items-center justify-center";

const changeSection = (e) => {
  content.innerHTML = "";
  if (e.target.matches(".menu")) {
    content.appendChild(Menu());
  }
  if (e.target.matches(".home")) {
    content.appendChild(Home());
  }
  if (e.target.matches(".contact")) {
    content.appendChild(Contact());
  }
};

const initPage = () => {
  document.body.insertBefore(header(), content);
  //content.appendChild(Home());
  content.appendChild(Menu());
  document.body.appendChild(Footer());

  document.querySelector(".sections").addEventListener("click", changeSection);
};

window.addEventListener("DOMContentLoaded", initPage);
