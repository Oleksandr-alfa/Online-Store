import { initCartButton } from "../cart";
import { initWishlistBtn } from "../wishlist";

import { CART_KEY } from "./constants";
import { fetchProductById } from "./products-api";
import { refs } from "./refs";
import { renderProductCard } from "./render-function";



export const openProductModal = async (id) => {
    try {
        const data = await fetchProductById(id);
        renderProductCard([data]);
        initCartButton(data.id);
        initWishlistBtn(data.id);
        
    } catch (error) {
        console.log(error);
    }
}
export const closeProductModal = () => {
    refs.divModal.classList.remove('modal--is-open');
}

