import { getCategories, getProductById, getProducts, getProductsByCategory } from "./js/handlers";
import { refs } from "./js/refs";

getCategories();

getProducts();

refs.categoryList.addEventListener('click', getProductsByCategory);

refs.productsList.addEventListener('click', getProductById);
