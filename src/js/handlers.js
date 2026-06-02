import { fetchAllCategories } from "./products-api";
import { renderCategories } from "./render-function";

export const getCategories = async () => {
    try {
        const data = await fetchAllCategories();
        renderCategories(data);
    } catch (error) {
        console.log(error);
}
}