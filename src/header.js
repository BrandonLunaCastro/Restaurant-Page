export const Header = () =>{
    const header = document.createElement("header"),
    div = document.createElement("div")
  
    div.className = "backdrop-filter backdrop-blur-md sticky top-0 bg-emerald-500/75 h-30 flex justify-around items-center  shadow-xl  text-cyan-950 "
    header.innerHTML = `
        <nav>
            <h1 class="text-5xl my-3 text-center">Healthy food</h1>
            <ul class="flex text-lg sections" >
                <li class="pr-7 text-3xl cursor-pointer "><a href="#" class="home">HOME</a></li>
                <li class= "pr-7 text-3xl cursor-pointer "><a href="#" class="menu"  >MENU</a></li>
                <li class="pr-7 text-3xl cursor-pointer "><a href="#" class="contact" >CONTACT</a></li>
            </ul>
        </nav>
    `;
    header.className = ""
    div.appendChild(header);

    return div

}