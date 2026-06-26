import { CART_KEY, WISHLIST_KEY } from "./constants";

export const loadCart = () => {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
        return [];
    }
};
export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};


export const loadWishlist = () => {
    try {
        const data = JSON.parse(localStorage.getItem('wishlist'));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
};


export const saveWishlist = (wishlist) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};