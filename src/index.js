import "./style.css";
import Home from "./home.js";
import Footer from "./footer.js";
import { Header as header } from "./header.js";
import Menu from "./menu.js";
   
    const content = document.getElementById("content")
    document.body.className = "bg-lime-50 text-sky-950 h-screen ";
    
    const changeSection = (e) => {
        content.innerHTML = ""
        e.target.matches(".menu") ? content.appendChild(Menu()) : false
    }

    const initPage = () => {
        
        document.body.insertBefore(header(),content)
        content.appendChild(Home());
        document.body.appendChild(Footer());

        document.querySelector(".sections").addEventListener("click",changeSection);
    }

window.addEventListener("DOMContentLoaded",initPage)


