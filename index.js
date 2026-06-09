import"./assets/styles-DmH0OdqC.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const u="https://dummyjson.com/",a={allProducts:"products",allCategory:"products/category-list",productsByCategory:"products/category",productByName:"products/search"},d=12;e.defaults.baseURL=u;const p=async()=>(await e.get(a.allCategory)).data,i=async t=>(await e.get(a.allProducts,{params:{limit:d,skip:(t-1)*d}})).data,m=async t=>(await e.get(`${a.productsByCategory}/${t}`)).data,y=async t=>(await e.get(`${a.allProducts}/${t}`)).data,g=async t=>(await e.get(a.productByName,{params:{q:t}})).data,_=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},b=t=>{const o=document.querySelector(".categories__btn--active");o&&o.classList.remove("categories__btn--active"),t.target.classList.add("categories__btn--active")},c={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divModal:document.querySelector(".modal"),divModalContent:document.querySelector(".modal-product"),closeModalBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form")},L=t=>{const o=t.map(s=>`<li class="categories__item"><button class="categories__btn" type="button">${s}</button></li>`).join("");c.categoryList.innerHTML=o},n=t=>{const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
        <img class="products__image" src="${s.thumbnail}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category}</p>
    <p class="products__price">Price: ${s.price}$</p>
 </li>`).join("");c.productsList.insertAdjacentHTML("beforeend",o)},l=()=>{c.productsList.innerHTML=""},h=t=>{const o=t.map(s=>`<img class="modal-product__img" src="${s.thumbnail}" alt="${s.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${s.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${s.description}</p>
        <p class="modal-product__shipping-information">Shipping:${s.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${s.returnPolicy}</p>
        <p class="modal-product__price">Price:${s.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`).join("");c.divModalContent.innerHTML=o,c.divModal.classList.add("modal--is-open")},P=async t=>{try{const o=await y(t);h([o])}catch(o){console.log(o)}},$=()=>{c.divModal.classList.remove("modal--is-open")},f=async()=>{try{const t=await p();L(["All",...t]),_()}catch(t){console.log(t)}},B=async()=>{try{const t=await i(1);n(t.products)}catch(t){console.log(t)}},v=async t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.textContent;let s=null;b(t);try{o==="All"?s=await i(1):s=await m(o),l(),n(s.products)}catch(r){console.log(r)}},C=async t=>{const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;P(s)},M=async t=>{t.preventDefault();const o=t.target.searchValue.value.trim();if(!o)return;const s=o.slice(0,4).toLowerCase();try{const r=await g(s);l(),n(r.products)}catch(r){console.log(r)}};f();B();c.categoryList.addEventListener("click",v);c.productsList.addEventListener("click",C);c.closeModalBtn.addEventListener("click",$);c.searchForm.addEventListener("submit",M);
//# sourceMappingURL=index.js.map
