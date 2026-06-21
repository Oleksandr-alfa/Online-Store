//Логіка сторінки Cart

import { CART_KEY } from "./js/constants";
import { fetchProductById } from "./js/products-api";
import { refs } from "./js/refs";
import { renderProductCard, renderProducts, renderProductsInCart } from "./js/render-function";


document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
     const cartProductsBox = document.querySelector('.cart-products');
    if (cartProductsBox) {
        updateCartGallery();
    }
    
});
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

export const toggleCartItem = (id) => {
    const cart = loadCart();
    const index = cart.indexOf(id);

    if (index === -1) { cart.push(id); } else {
        cart.splice(index, 1);
    }
    saveCart(cart);
    return cart.includes(id);
};
export const isInCart = (id) => {
    return loadCart().includes(id);
};



  export const initCartButton = (productId) => {
  const btn = refs.addToCartBtn;

  // початковий текст
  btn.textContent = isInCart(productId)
    ? 'Remove from Cart'
    : 'Add to Cart';

  btn.onclick = () => {
    const inCart = toggleCartItem(productId);

    btn.textContent = inCart
      ? 'Remove from Cart'
          : 'Add to Cart';
      updateCartCount();
  };
};

export const updateCartCount = async () => {
  const cart = loadCart();
    const countEl = document.querySelector('[data-cart-count]');
    const countPrice = document.querySelector('[data-price');
    const countItem = document.querySelector('[data-count]');
    const shipping = document.querySelector('[data-shipping]');

  if (!countEl) return;

    countEl.textContent = cart.length;
    if (!countItem) return;
    countItem.textContent = cart.length; 
    if (!countPrice) return;
    let total = 0;
   
    for (const id of cart) {
        const product = await fetchProductById(id);
        total += product.price;
    }
    countPrice.textContent = `$${total}`;
};

const updateCartGallery = async () => {
    const cart = loadCart();
    const cartProductsBox = document.querySelector('.cart-products');
    cartProductsBox.innerHTML = '';
    const products = [];
    for (const id of cart) {
        const product = await fetchProductById(id);
        products.push(product);
    }
    
    renderProductsInCart(products);
    
};