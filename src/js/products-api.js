import axios from "axios"
import { BASE_URL, END_POINTS } from "./constants"

axios.defaults.baseURL = BASE_URL;

export const fetchAllCategories = async () => {
    const response = await axios.get(END_POINTS.allCategory);
    console.log(response);
    return response.data;
}
export const fetchAllProducts = async (currentPage) => {
    const response = await axios.get(END_POINTS.allProducts,{params: {LIMIT, scip: (currentPage - 1) * LIMIT} });
    return response.data;
}