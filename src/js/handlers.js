import { activeBtn, activeFirstBtn, } from "./helpers";
import { openProductModal } from "./modal";
import { fetchAllCategories, fetchAllProducts, fetchProductByName, fetchProductsByCategory } from "./products-api";
import { clearProducts, renderCategories, renderProductCard, renderProducts } from "./render-function";

export const getCategories = async () => {
    try {
        const data = await fetchAllCategories();
        renderCategories(['All', ...data]);
        activeFirstBtn();
    } catch (error) {
        console.log(error);
}
}

export const getProducts = async () => {
    try {
        const data = await fetchAllProducts(1)
        renderProducts(data.products)
    }catch(error){
        console.log(error);
    };
}

export const getProductsByCategory = async (event) => {
    
    if (event.target.nodeName !== 'BUTTON')
        return;
    const category = event.target.textContent;
    let data = null;
    activeBtn(event);
    try {
        if (category === 'All') {
            data = await fetchAllProducts(1);
        } else {
             data = await fetchProductsByCategory(category);
        }
        clearProducts();
        renderProducts(data.products);
     } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (event) => {
    const card = event.target.closest('.products__item');
    if (!card)  return; 
    const id = card.dataset.id;  
    
    openProductModal(id);
}

export const getProductByName = async (event) => {
    event.preventDefault();
    const query = event.target.searchValue.value.trim();
   

    if (!query) return;
 const normalized = query.slice(0, 4).toLowerCase();
   try{ const data = await fetchProductByName(normalized);
    clearProducts();
       renderProducts(data.products);
   } catch (error) {
       console.log(error);
    }
}