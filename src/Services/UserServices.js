import axios from 'axios'
const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'



const RegisterUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const LoginUser = (data) => axios.post(`${BASE_URL}/login`,data)
const GetUserData = (id) => axios.get(`${BASE_URL}/users/${id}`,{
    headers: { Authorization: `JWT ${window.sessionStorage.getItem('token')}` }
  })
const RegisterNewProduct = (data) => axios.post(`${BASE_URL}/item`,data ,{
    headers: { Authorization: `JWT ${window.sessionStorage.getItem('token')}` }
  })

export { RegisterUser, LoginUser, GetUserData, RegisterNewProduct}