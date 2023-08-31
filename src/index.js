import Home from "./home.js";

const content = document.getElementById("content")
const header = document.createElement("header"),
    section = document.createElement("section"),
    h1 = document.createElement("h1");

    h1.innerText = "Healthy food"
    header.innerHTML = `
        <nav>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT US</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </nav>

    `;
    
    section.appendChild(h1);
    section.appendChild(header);

    content.appendChild(section);


//content.appendChild(Home())


