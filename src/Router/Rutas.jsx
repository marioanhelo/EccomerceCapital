import { useContext } from 'react';
import { Home,SingleProduct, NotFound, SignUp, Login, Cart, SearchResults, MyAccount, AddNewProduct } from '../Pages/';
import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from '../Components/NavBar'
import { AuthContext } from '@/Context/Auth.jsx';

import React from 'react'


const Rutas = () => {
  const { isAuth } = useContext(AuthContext);
  return(<>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='products/:productId' element={<SingleProduct/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/myaccount' element={<MyAccount/>}/>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/NewProduct' element={<AddNewProduct />} />
              <Route path='*' element={<NotFound/>}/>
              <Route path='/results' element={<SearchResults/>}/>
              <Route
                path='/'
                element={isAuth ? <Home /> : <Navigate to='/' replace />}
              />
            </Routes>
          </>
      );
}

export default Rutas