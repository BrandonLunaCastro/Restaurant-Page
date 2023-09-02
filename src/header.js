export const Header = () =>{
    const header = document.createElement("header"),
    div = document.createElement("div")
  
    div.className = "h-36 backdrop-filter backdrop-blur-md sticky top-0 bg-emerald-500/75 justify-around items-center  shadow-xl  text-cyan-950 "
    header.innerHTML = `
        <nav>
            <h1 class="text-5xl my-3 text-center">Healthy food</h1>
            <ul class="flex text-lg sections justify-center pt-4" >
                <li class="mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100 transition-all duration-200 "><a href="#" class="home">HOME</a></li>
                <li class= "mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100 transition-all duration-200 "><a href="#" class="menu"  >MENU</a></li>
                <li class="mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100 transition-all  duration-200 "><a href="#" class="contact" >CONTACT</a></li>
            </ul>
        </nav>
    `;
    header.className = ""
    div.appendChild(header);

    return div

}