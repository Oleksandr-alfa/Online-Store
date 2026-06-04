import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const n="https://dummyjson.com/",a={allProducts:"products",allCategory:"products/category-list"},c=12;r.defaults.baseURL=n;const i=async()=>(await r.get(a.allCategory)).data,p=async t=>(await r.get(a.allProducts,{params:{limit:c,skip:(t-1)*c}})).data,e={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products")},d=t=>{const o=t.map(s=>`<li class="categories__item"><button class="categories__btn" type="button">${s}</button></li>`).join("");e.categoryList.innerHTML=o},l=t=>{const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
        <img class="products__image" src="${s.thumbnail}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category}</p>
    <p class="products__price">Price: ${s.price}$</p>
 </li>`).join("");e.productsList.insertAdjacentHTML("beforeend",o)},u=async()=>{try{const t=await i();d(t)}catch(t){console.log(t)}},g=async()=>{try{const t=await p(1);l(t.products)}catch(t){console.log(t)}};u();g();
//# sourceMappingURL=index.js.map
