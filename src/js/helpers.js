import { fetchProductById } from "./products-api";
import { renderProductCard } from "./render-function";

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
export const openProductModal = async (id) => {
    try {
        const data = await fetchProductById(id);
        renderProductCard([data]);
    } catch (error) {
        console.log(error);
    }
}