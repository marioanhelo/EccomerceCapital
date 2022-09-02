import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Products } from './Products'
import Hero from '../Components/Hero';

export const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mx-auto'>
          <Hero />
        </div>
      </div>
      <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <Products/>
          </div>
        </div>
      </div>
  </div>
  )
}
