import axios from "axios";

const BaseURL = 'https://ecomerce-master.herokuapp.com/api/v1'

export const ecommerceApi = axios.create({baseURL:BaseURL})