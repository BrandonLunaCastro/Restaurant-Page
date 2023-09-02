export const Header = () =>{
    const header = document.createElement("header"),
    div = document.createElement("div")
  
    div.className = "h-36 backdrop-filter backdrop-blur-md sticky top-0 bg-emerald-500/75 justify-around items-center  shadow-xl  text-cyan-950 "
    header.innerHTML = `
        <nav >
            <h1 class=" font-dancing text-5xl my-3 text-center">Healthy food <i class="fa-solid fa-leaf fa-sm"></i></h1>
            <ul class="flex text-lg sections justify-center pt-4" >
                <li class="transition-all  mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100 duration-500 hover:-translate-y-2 "><a class="home font-dancing">HOME</a></li>
                <li class= "transition-all  mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100 duration-500 hover:-translate-y-2 "><a class="menu font-dancing"  >MENU</a></li>
                <li class="transition-all  mr-5 text-3xl cursor-pointer hover:border-b-2 border-b-slate-50  hover:text-slate-100  duration-500 hover:-translate-y-2 "><a class="contact font-dancing" >CONTACT</a></li>
            </ul>
        </nav>
    `;
    header.className = ""
    div.appendChild(header);

    return div

}