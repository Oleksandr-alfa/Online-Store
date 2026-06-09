import { fetchProductById } from "./products-api";
import { refs } from "./refs";
import { renderProductCard } from "./render-function";

export const openProductModal = async (id) => {
    try {
        const data = await fetchProductById(id);
        renderProductCard([data]);
    } catch (error) {
        console.log(error);
    }
}
export const closeProductModal = () => {
    refs.divModal.classList.remove('modal--is-open');
}