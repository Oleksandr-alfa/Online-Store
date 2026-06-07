import axios from "axios"
import { BASE_URL, END_POINTS, LIMIT } from "./constants"

axios.defaults.baseURL = BASE_URL;

export const fetchAllCategories = async () => {
    const response = await axios.get(END_POINTS.allCategory);
    return response.data;
}

export const fetchAllProducts = async (currentPage) => {
    const response = await axios.get(END_POINTS.allProducts,{params: {limit: LIMIT, skip: (currentPage - 1) * LIMIT} });
    return response.data;
}

export const fetchProductsByCategory = async (category) => {
    const response = await axios.get(`${END_POINTS.productsByCategory}/${category}`);
    return response.data;
}

export const fetchProductById = async (id) => {
    
    const response = await axios.get(`${END_POINTS.allProducts}/${id}`);
    return response.data;
}

export const fetchProductByName = async (normalized) => {
  
    const response = await axios.get(END_POINTS.productByName, {
        params: { q: normalized }
    });
   
    return response.data;
   
}