import { refs } from "./refs";

export const renderCategories = (categories) => {
    const markup = categories.map(el => `<li class="categories__item"><button class="categories__btn" type="button">${el}</button></li>`)
        .join('');
    refs.categoryList.innerHTML = markup;
}