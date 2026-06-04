import { fetchAllCategories, fetchAllProducts } from "./products-api";
import { renderCategories, renderProducts } from "./render-function";

export const getCategories = async () => {
    try {
        const data = await fetchAllCategories();
        renderCategories(data);
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