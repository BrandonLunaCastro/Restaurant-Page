import image from "./pexels.jpeg";
export default function Home() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2 class="text-3xl p-8" >Why is important for us eating healthy?</h2>
    <article class="flex items-center gap-3 pb-9">
     <img src=${image} alt="salad" class="w-1/2 mx-5 rounded-xl shadow-lg">
     <div>
       <h4 class="text-2xl font-bold">The benefits</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque at ex quis porta. Nunc eget libero volutpat, finibus felis et, lobortis.</p>
       <ul>
        <li class="list-disc">Quisque quis orci nec orci ultricies vestibulum a eget eros.</li>
        <li class="list-disc">In finibus mi sit amet ornare egestas.</li>
        <li class="list-disc">Nulla viverra justo quis eros mattis facilisis.</li>
       </ul>
     </div>
    </article>
    `;

  return div;
}
