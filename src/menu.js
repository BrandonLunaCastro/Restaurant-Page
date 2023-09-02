import arroz from "./img/arroz.jpg";
import chickenSalad from "./img/chickenSalad.jpg";
import eggToast from "./img/eggToast.jpg";
import salmon from "./img/salmon.jpg";
import wrap from "./img/wrap.jpg";
import taco from "./img/taco.jpg";

export default function Menu() {
  const div = document.createElement("div");
  div.innerHTML = ` 
        <section class="grid grid-cols-3 grid-rows-2 gap-9 " >
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52' src=${eggToast}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$10</p>
           </article>
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52 object-center' src=${chickenSalad}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$25</p>
           </article>
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52 object-cover' src=${arroz}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$30</p></article>
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52 object-cover' src=${salmon}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$40</p></article>
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52 object-cover' src=${wrap}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$20</p></article>
           <article class="bg-emerald-200 w-3/4 pb-3 rounded-xl overflow-hidden" >
            <img class='w-72 h-52 object-cover' src=${taco}>
            <p class='text-center'>Pellentesque porttitor id massa vitae dapibus.</p>
            <p class="font-bold text-3xl text-center">$20</p></article>
        </section>

    `;

  return div;
}
