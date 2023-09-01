import "./style.css";
import Home from "./home.js";
import Footer from "./footer.js";
import { Header as header } from "./header.js";

const content = document.getElementById("content")
    content.className = "bg-lime-50 text-sky-950 h-screen ";

content.appendChild(header())
content.appendChild(Home())    
content.appendChild(Footer())



