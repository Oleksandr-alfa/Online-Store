import { getCategories, getProductById, getProductByName, getProducts, getProductsByCategory } from "./js/handlers";
import { closeProductModal } from "./js/modal";
import {fetchProductByName } from "./js/products-api";
import { refs } from "./js/refs";

getCategories();

getProducts();

refs.categoryList.addEventListener('click', getProductsByCategory);

refs.productsList.addEventListener('click', getProductById);

refs.closeModalBtn.addEventListener('click', closeProductModal);

refs.searchForm.addEventListener('submit', getProductByName);


