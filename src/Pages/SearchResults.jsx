import { useState, useEffect } from 'react'
import { useProductContext } from '@/Context/ProductContext.jsx'
import CardProduct from '@/Components/Card';
import ProductNotFound from '@/Components/ProductNotFound';
export const SearchResults = () => {
  const [filterproducts, setFilterproducts] = useState([])
  const context = useProductContext()
    const query = context.search

    const filterData= ()=>{
      if (query==='') {
        setFilterproducts([]);
      }else{
        setFilterproducts(context.products.filter(item => item.product_name.toUpperCase().includes(query.toUpperCase())));

      }

    }
    useEffect(() => {
      filterData();
    }, []);

    return(
      <>
      <div className="container d-flex flex-column gap-3 mt-5">
        {query.length>0 && filterproducts.length>0 ?
        (<>
          <h4 className='text-primary mt-4 mr-5'>{`Resultados de la búsqueda "${query}" (${filterproducts.length} coincidencias)`}</h4>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row'>
        {filterproducts.map((product) => (<CardProduct
      key={product._id}
      img={product.image}
      title={product.product_name}
      productId={product._id}
      price={product.price}
      category={product.category}
      description = {product.description}
      brand={product.brand}
  />
  ))} </div>
        </div>
      </div>
        </>):
        (<>
          <ProductNotFound />
        </>)
        }
      </div>
  </>
    )
}






