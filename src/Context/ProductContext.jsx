import { useEffect, useState, createContext, useContext } from 'react'
import { ecommerceApi } from "@/API/ecommerce";

export const ProductContext = createContext()

function ProductProvider (props) {
  const[products,setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const getProductsData = async() => {
    const res = await ecommerceApi.get('/products')
    setProducts(res.data)
    setLoading(false)
  }

  useEffect(() => {
    getProductsData()
    return () =>{
    }
  },[])

  const values = {
    products,
    loading,
    search,
    setSearch
  };

  return (
    <ProductContext.Provider value={values}>{props.children}</ProductContext.Provider>
  );
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}

