import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const d="https://dummyjson.com/",a={allProducts:"products",allCategory:"products/category-list",productsByCategory:"products/category"},e=12;r.defaults.baseURL=d;const i=async()=>(await r.get(a.allCategory)).data,p=async t=>(await r.get(a.allProducts,{params:{limit:e,skip:(t-1)*e}})).data,u=async t=>(await r.get(`${a.productsByCategory}/${t}`)).data,c={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products")},l=t=>{const o=t.map(s=>`<li class="categories__item"><button class="categories__btn" type="button">${s}</button></li>`).join("");c.categoryList.innerHTML=o},n=t=>{const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
        <img class="products__image" src="${s.thumbnail}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category}</p>
    <p class="products__price">Price: ${s.price}$</p>
 </li>`).join("");c.productsList.insertAdjacentHTML("beforeend",o)},g=()=>{c.productsList.innerHTML=""},y=async()=>{try{const t=await i();l(t)}catch(t){console.log(t)}},m=async()=>{try{const t=await p(1);n(t.products)}catch(t){console.log(t)}},_=async t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.textContent;try{const s=await u(o);g(),n(s.products)}catch(s){console.log(s)}};y();m();c.categoryList.addEventListener("click",_);
//# sourceMappingURL=index.js.map
