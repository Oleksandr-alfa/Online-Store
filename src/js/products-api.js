import axios from "axios"
import { BASE_URL, END_POINTS } from "./constants"

export const fetchAllCategories = async () => {
    const response = await axios.get(`${BASE_URL}${END_POINTS.allCategory}`);
    console.log(response);
    return response.data;
}