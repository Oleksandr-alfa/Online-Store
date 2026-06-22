import { loadCart } from "./cart"
import { WISHLIST_KEY } from "./js/constants";

//Логіка сторінки Wishlist
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadWishlist();
});

export const loadWishlist = () => {
    try {
        return JSON.parse(localStorage.getItem(WISHLIST_KEY || []))
    } catch (error) {
        return [];
    }
};

export const saveWishlist = (wishlist) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

export const toggleWishlistItem = (id) => {
    const wishlist = loadWishlist();
    const index = wishlist.indexOf(id);
    if (index === -1) {
        wishlist.push(id);
    } else {
        wishlist.splice(index, 1);
    }
    saveWishlist(wishlist);
    return wishlist.includes(id);
};

