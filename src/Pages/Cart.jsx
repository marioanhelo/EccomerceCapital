import React from 'react'
import { EmptyCart } from '../Components/EmptyCart'

export const Cart = () => {
  return (
    <div className='row mt-5 '>
        <div className='col-md-8 mx-auto'>
            <div className='card shadow'>
                <div className='card-body'>
                    <EmptyCart />
                </div>
            </div>
        </div>
    </div>
  )
}
