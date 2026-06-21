import{a as s}from"./vendor-N5iQpiFS.js";const y="https://dummyjson.com/",e={allProducts:"products",allCategory:"products/category-list",productsByCategory:"products/category",productByName:"products/search"},u=12,i="cart";s.defaults.baseURL=y;const S=async()=>(await s.get(e.allCategory)).data,P=async o=>(await s.get(e.allProducts,{params:{limit:u,skip:(o-1)*u}})).data,B=async o=>(await s.get(`${e.productsByCategory}/${o}`)).data,p=async o=>(await s.get(`${e.allProducts}/${o}`)).data,L=async o=>(await s.get(e.productByName,{params:{q:o}})).data,c={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divModal:document.querySelector(".modal"),divModalContent:document.querySelector(".modal-product"),closeModalBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),clearBtn:document.querySelector(".search-form__btn-clear"),input:document.querySelector(".search-form__input"),addToCartBtn:document.querySelector(".modal-product__btn--cart"),addToWishlist:document.querySelector(".modal-product__btn--wishlist"),cartProductsList:document.querySelector(".cart-products")},q=o=>{const r=o.map(t=>`<li class="categories__item"><button class="categories__btn" type="button">${t}</button></li>`).join("");c.categoryList.innerHTML=r},M=o=>{const r=o.map(t=>`<li class="products__item" data-id="${t.id}">
        <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${t.brand}</span></p>
    <p class="products__category">Category:${t.category}</p>
    <p class="products__price">Price: ${t.price}$</p>
 </li>`).join("");c.productsList.insertAdjacentHTML("beforeend",r)},x=()=>{c.productsList.innerHTML=""},T=o=>{const r=o.map(t=>`<img class="modal-product__img" src="${t.thumbnail}" alt="${t.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping:${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${t.returnPolicy}</p>
        <p class="modal-product__price">Price:${t.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`).join("");c.divModalContent.innerHTML=r,c.divModal.classList.add("modal--is-open")},g=o=>{const r=o.map(t=>`<li class="products__item" data-id="${t.id}">
        <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${t.brand}</span></p>
    <p class="products__category">Category:${t.category}</p>
    <p class="products__price">Price: ${t.price}$</p>
 </li>`).join("");c.cartProductsList.insertAdjacentHTML("beforeend",r)};document.addEventListener("DOMContentLoaded",()=>{l(),document.querySelector(".cart-products")&&f()});const d=()=>{try{return JSON.parse(localStorage.getItem(i))||[]}catch{return[]}},C=o=>{localStorage.setItem(i,JSON.stringify(o))},$=o=>{const r=d(),t=r.indexOf(o);return t===-1?r.push(o):r.splice(t,1),C(r),r.includes(o)},b=o=>d().includes(o),v=o=>{const r=c.addToCartBtn;r.textContent=b(o)?"Remove from Cart":"Add to Cart",r.onclick=()=>{const t=$(o);r.textContent=t?"Remove from Cart":"Add to Cart",l()}},l=async()=>{const o=d(),r=document.querySelector("[data-cart-count]"),t=document.querySelector("[data-price"),a=document.querySelector("[data-count]");if(document.querySelector("[data-shipping]"),!r||(r.textContent=o.length,!a)||(a.textContent=o.length,!t))return;let n=0;for(const m of o){const _=await p(m);n+=_.price}t.textContent=`$${n}`},f=async()=>{const o=d(),r=document.querySelector(".cart-products");r.innerHTML="";const t=[];for(const a of o){const n=await p(a);t.push(n)}g(t)};export{T as a,S as b,q as c,P as d,M as e,p as f,B as g,x as h,v as i,L as j,c as r,l as u};
//# sourceMappingURL=cart-CV6UaVrj.js.map
