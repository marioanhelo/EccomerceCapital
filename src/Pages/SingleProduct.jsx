import React, { useEffect, useState, useContext } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { ecommerceApi } from '@/Api/ecommerce'
import Loader from '@/Components/Spinner'
import DefaultImage from '@/assets/img-default.png'
import Button from '@/Components/Button'
import { AuthContext } from '@/Context/Auth.jsx';

export const SingleProduct = () => {
    const { isAuth } = useContext(AuthContext);
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    const getSingleProductData = async () =>{
        try{
        const res = await ecommerceApi.get(`/item/${productId}`)
        setProduct(res.data)
        setLoading(false)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getSingleProductData()
    }, )
    let navigate = useNavigate();
    const handleRedirect = () =>{
        let path = '/login';
        navigate(path);
    }

  return (
    <div>
        {loading ? <Loader/> : (
            <div className='row mt-4'>
                <div className='col-8 mx-auto'>
                    <div className='row mt-2'>
                        <div className='col-4 mx-auto'>
                            <img className='image-product'
                                alt={product.product_name}
                                src={product.image ? product.image :DefaultImage}
                                onError={(e)=>{e.target.onerror = null; e.target.src= DefaultImage } }
                            />
                        </div>
                        <div className='col-6 mx-auto'>
                            <h3>{product.product_name}</h3>
                            <h4>{product.brand}</h4>
                            <h5>${product.price}</h5>
                            <p>{product.description}</p>
                            {!isAuth ? (
                                <button type='button' className='btn btn-dark' onClick={handleRedirect}>Iniciar sesión</button>
                                ) : product.isActive ? (<Button className={'btn btn-primary'} productId={productId} title='Agregar al carrito' disabled={false}/>
                                ): (<Button className={'btn btn-secondary'} productId={productId} title='Out of stock' disabled={true} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
