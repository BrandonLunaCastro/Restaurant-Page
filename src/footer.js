export default function Footer(){
    const footer = document.createElement("footer")

    footer.className = "flex gap-4 h-20 items-center justify-center bg-emerald-500/75"
    footer.innerHTML = `
    <p class="font-dancing font-bold text-2xl" >Design by Brandon Luna 2023</p>
    <a
      href="https://github.com/BrandonLunaCastro"
      rel="noopener"
      target="_blank"
      ><i class="fa-brands fa-github fa-2xl"></i
    ></a>
    `;

    return footer;
}