import { refs } from "./refs";

export const renderCategories = (categories) => {
    const markup = categories.map(el => `<li class="categories__item"><button class="categories__btn" type="button">${el}</button></li>`)
        .join('');
    refs.categoryList.innerHTML = markup;
}

export const renderProducts = (arr) => {
   
    const markup = arr.map(el => `<li class="products__item" data-id="${el.id}">
        <img class="products__image" src="${el.thumbnail}" alt="${el.title}"/>
    <p class="products__title">${el.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${el.brand}</span></p>
    <p class="products__category">Category:${el.category}</p>
    <p class="products__price">Price: ${el.price}$</p>
 </li>`)
        .join('');
    refs.productsList.insertAdjacentHTML('beforeend', markup);

}
export const clearProducts = () => {
    refs.productsList.innerHTML = '';
}