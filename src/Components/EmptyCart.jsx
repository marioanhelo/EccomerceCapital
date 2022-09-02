import React from 'react'
import EmptyCartImg from '../assets/emptyCart.svg'

export const EmptyCart = () => {
  return (
    <>
        <img className='d-block mx-auto' src={EmptyCartImg} style={{width:'180px'}}/>
        <h6 className='text-dark text-center'>El carrito esta vacío</h6>
    </>
  )
}
