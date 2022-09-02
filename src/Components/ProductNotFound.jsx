import EmptyCartImg from '../assets/emptyCart.svg'

const ProductNotFound = () => {
  return (<>
    <img className='d-block mx-auto' src={EmptyCartImg} style={{width:'180px'}}/>
    <h6 className='text-dark text-center'>Sin resultados</h6>

  </>
  )
}

export default ProductNotFound