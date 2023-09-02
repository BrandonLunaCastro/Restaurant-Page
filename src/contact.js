export default function Contact(){
   const div= document.createElement('div')
   div.className = "p-9 my-8 bg-emerald-500/75 rounded-md"
   div.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68934.26469004322!2d6.074904277547236!3d62.18877117932319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616e5cf883bca8d%3A0x649c6a72876e298d!2zw5hyc3RhLCBOb3J1ZWdh!5e0!3m2!1ses!2sar!4v1693684976183!5m2!1ses!2sar" width="650" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <article class="flex flex-col justify-center gap-2 my-2">
         <p class="font-semi-bold text-xl"><i class="fa-solid fa-phone"></i> Telephone: +4 444-444-444 </p>
         <p class="font-semi-bold text-xl"><i class="fa-solid fa-house"></i> Direction: Ørsta parkvegen 5531</p>
         <p class="font-semi-bold text-xl"><i class="fa-solid fa-envelope"></i> Mail: healthyFood@myemail.com </p>
      </article>
   `;
   
   return div
}