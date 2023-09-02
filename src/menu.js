import arroz from "./img/arroz.jpg";
import chickenSalad from "./img/chickenSalad.jpg";
import eggToast from "./img/eggToast.jpg";
import salmon from "./img/salmon.jpg";
import wrap from "./img/wrap.jpg";
import taco from "./img/taco.jpg";

export default function Menu() {
  const div = document.createElement("div");
  div.innerHTML = ` 
       <section class="bg-emerald-400 p-9 rounded-md m-8">
        <h2 class="text-center font-bold text-5xl">Menu <i class="fa-solid fa-utensils fa-lg"></i></h2>
        <article class="flex items-center gap-5 p-2 border-b-2 border-b-green-900 my-3 py-10">
          <img src=${arroz} class="shadow-xl object-cover w-52  h-52 rounded-full">
          <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
           <p class="font-dancing text-xl font-semibold">Rice whit vegetables</p>
           <p class="font-dancing font-bold text-2xl">$30.99</p>
          </div>
        </article>
        <article class="flex items-center gap-5 p-2 border-b-2 border-b-green-900 py-10">
        <img src=${chickenSalad} class="shadow-xl object-cover w-52  h-52 rounded-full">
        <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
         <p class="font-dancing text-xl font-semibold">Chicken salad</p>
         <p class="font-dancing font-bold text-2xl " >$20.99</p>
        </div>
      </article>
        <article class="flex items-center gap-5 p-2 border-b-2 border-b-green-900 py-10">
          <img src=${eggToast} class="shadow-xl object-cover w-52  h-52 rounded-full">
          <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
            <p class="font-dancing text-xl font-semibold">Eggs whit avocado toast</p>
            <p class="font-dancing font-bold text-2xl " >$14.99</p>
          </div>
      </article>
      <article class="flex items-center gap-5 p-2 border-b-2 border-b-green-900 py-10">
        <img src=${salmon} class="shadow-xl object-cover w-52  h-52 rounded-full">
        <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
          <p class="font-dancing text-xl font-semibold">Smoked salmon</p>
          <p class="font-dancing font-bold text-2xl " >$40.5</p>
        </div>
      </article>
      <article class="flex items-center gap-5 p-2 border-b-2 border-b-green-900 py-10">
        <img src=${wrap} class="shadow-xl object-cover w-52  h-52 rounded-full">
        <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
         <p class="font-dancing text-xl font-semibold">Chicken wraps</p>
         <p class="font-dancing font-bold text-2xl " >$24.99</p>
        </div>
      </article>
      <article class="flex items-center gap-5 p-2 py-10">
        <img src=${taco} class="shadow-xl object-cover w-52  h-52 rounded-full">
        <div class="flex border-b-2 border-b-slate-800 border-dotted justify-between w-96">
         <p class="font-dancing text-xl font-semibold">Vegetable taco</p>
         <p class="font-dancing font-bold text-2xl " >$19.99</p>
        </div>
      </article>
      
      
      </section>

    `;

  return div;
}
