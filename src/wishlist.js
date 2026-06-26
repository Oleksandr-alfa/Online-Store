

import { updateCartCount } from "./cart";
import { WISHLIST_KEY } from "./js/constants";
import { refs } from "./js/refs";
import { loadCart, loadWishlist, saveWishlist } from "./js/storage";

//Логіка сторінки Wishlist
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    
});

export const toggleWishlistItem = (id) => {
    const wishlist = loadWishlist();
    const index = wishlist.indexOf(id);
    if (index === -1) { wishlist.push(id); } else {
        wishlist.splice(index, 1);
    }
    saveWishlist(wishlist);
    return wishlist.includes(id);
}

export const isInWishlist = (id) => {
    
    return loadWishlist().includes(id);

}


export const initWishlistBtn = (productId) => {
    const btn = refs.addToWishlistBtn;
    const content = isInWishlist(productId);
    
    if (!btn) return;
    btn.textContent = content
        ? 'Remove from Wishlist'
        : 'Add to Wishlist';
    
    btn.onclick = (event) => {
        const inWishlist = toggleWishlistItem(productId);
        console.log(event.currentTarget);
        btn.textContent = inWishlist
            ? 'Remove from Wishlist'
            : 'Add to Wishlist';
        updateWishlistCount();
    }
}

export const updateWishlistCount = () => {
    const wishlist = loadWishlist();
    
    const countEl = document.querySelector('[data-wishlist-count]');
    if (!wishlist) { return; }else { countEl.textContent = wishlist.length; }
}