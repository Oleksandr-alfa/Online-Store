import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com/",r={allProducts:"products",allCategory:"products/category-list",productsByCategory:"products/category"},e=12;a.defaults.baseURL=l;const p=async()=>(await a.get(r.allCategory)).data,n=async t=>(await a.get(r.allProducts,{params:{limit:e,skip:(t-1)*e}})).data,u=async t=>(await a.get(`${r.productsByCategory}/${t}`)).data,_=async t=>(await a.get(`${r.allProducts}/${t}`)).data,c={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divModal:document.querySelector(".modal"),divModalContent:document.querySelector(".modal__content")},g=t=>{const s=t.map(o=>`<li class="categories__item"><button class="categories__btn" type="button">${o}</button></li>`).join("");c.categoryList.innerHTML=s},i=t=>{const s=t.map(o=>`<li class="products__item" data-id="${o.id}">
        <img class="products__image" src="${o.thumbnail}" alt="${o.title}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${o.brand}</span></p>
    <p class="products__category">Category:${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>`).join("");c.productsList.insertAdjacentHTML("beforeend",s)},y=()=>{c.productsList.innerHTML=""},m=t=>{const s=t.map(o=>`<img class="modal-product__img" src="${o.thumbnail}" alt="${o.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${o.description}</p>
        <p class="modal-product__shipping-information">Shipping:${o.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${o.returnPolicy}</p>
        <p class="modal-product__price">Price:${o.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`).join("");c.divModalContent.innerHTML=s,c.divModal.classList.add("modal--is-open")},b=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},$=t=>{const s=document.querySelector(".categories__btn--active");s&&s.classList.remove("categories__btn--active"),t.target.classList.add("categories__btn--active")},L=async t=>{try{const s=await _(t);m([s])}catch(s){console.log(s)}},P=async()=>{try{const t=await p();g(["All",...t]),b()}catch(t){console.log(t)}},f=async()=>{try{const t=await n(1);i(t.products)}catch(t){console.log(t)}},h=async t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;let o=null;$(t);try{s==="All"?o=await n(1):o=await u(s),y(),i(o.products)}catch(d){console.log(d)}},v=async t=>{const s=t.target.closest(".products__item");if(!s)return;const o=s.dataset.id;L(o)};P();f();c.categoryList.addEventListener("click",h);c.productsList.addEventListener("click",v);
//# sourceMappingURL=index.js.map
