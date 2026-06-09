import { fetchProductById } from "./products-api";


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
