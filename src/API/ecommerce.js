import axios from "axios";

//const BaseURL = 'https://ecomerce-master.herokuapp.com/api/v1'
const BaseURL = 'https://guileless-platypus-646a0e.netlify.app/api/v1'

export const ecommerceApi = axios.create({baseURL:BaseURL})