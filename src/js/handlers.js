import { activeBtn, activeFirstBtn } from "./helpers";
import { fetchAllCategories, fetchAllProducts, fetchProductsByCategory } from "./products-api";
import { clearProducts, renderCategories, renderProducts } from "./render-function";

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