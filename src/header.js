export const Header = () =>{
    const header = document.createElement("header"),
    div = document.createElement("div"),
    h1 = document.createElement("h1");

    h1.innerText = "Healthy food"
    h1.classList.add('text-lg')
    h1.classList.add("text-blue-600")
    header.innerHTML = `
        <nav>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT US</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </nav>
    `;
    div.appendChild(h1);
    div.appendChild(header);

    return div

}