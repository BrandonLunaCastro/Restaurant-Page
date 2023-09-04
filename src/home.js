import image from "./img/pexels2.jpg";
export default function Home() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2 class="text-3xl p-8" >Why is important for us eating healthy?</h2>
    <article class="flex items-center gap-3 pb-9">
     <img src=${image} alt="chef" class="w-80 h-95 object-fill mx-5 rounded-md shadow-lg">
     <div>
       <h4 class="text-2xl font-bold">The benefits of healthy diet</h4>
       <ul class="my-9">
        <li class="my-5 text-xl " ><i class="fa-solid fa-egg fa-lg pr-1"></i> Quisque quis orci nec orci ultricies vestibulum a eget eros.</li>
        <li class="my-5 text-xl " ><i class="fa-solid fa-carrot fa-lg pr-1"></i>In finibus mi sit amet ornare egestas.</li>
        <li class="my-5 text-xl " ><i class="fa-solid fa-apple-whole fa-lg pr-1" ;"></i>Nulla viverra justo quis eros mattis facilisis.</li>
        <li class="my-5 text-xl " ><i class="fa-solid fa-lemon fa-lg pr-1 "></i>Praesent hendrerit blandit elit, vel vulputate risus</li>
        <li class="my-5 text-xl " ><i class="fa-solid fa-seedling fa-lg pr-1"></i>Ut sapien sapien, auctor id semper id, tristique eget magna</li>
        </ul>
     </div>
    </article>
    `;

  return div;
}
