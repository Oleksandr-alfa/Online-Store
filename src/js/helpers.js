import { fetchProductById } from "./products-api";
import { refs } from "./refs";
import { clearProducts } from "./render-function";


export const activeFirstBtn = () => {
     const firstBtn = document.querySelector('.categories__btn');
        if (firstBtn) {
            firstBtn.classList.add('categories__btn--active')
        }
}

export const activeBtn = (event) => {
    const activeBtn = document.querySelector('.categories__btn--active');
    if (activeBtn) {
        activeBtn.classList.remove('categories__btn--active');
    }
    event.target.classList.add('categories__btn--active');
}
export const ifNotFoundProducts = () => {
    const divNotFound = document.querySelector('.not-found');
    
    divNotFound.classList.add('not-found--visible');
     
          
}
