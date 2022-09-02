import React from 'react'

const Button = (props) => {
  return (
    <button type='button' className={props.className} productid={props.productId} disabled={props.disabled}>{props.title}</button>
  )
}

export default Button