import Loader from '@/Components/Spinner'
import CardProduct from '@/Components/Card';
import { useProductContext } from '@/Context/ProductContext';
import ProductNotFound from '@/Components/ProductNotFound';

export const Products = () => {
  const context = useProductContext()

    return (
      <><h4 className='text-primary mt-4'>Productos</h4>
       {context.loading
        ? <Loader/>
        : context.products.filter(product => {
          if (context.search === '') {
            return product
          } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
            return product
          }
          return <ProductNotFound />
        }).map((product) => (
          <CardProduct
              key={product._id}
              img={product.image}
              title={product.product_name}
              productId={product._id}
              price={product.price}
              category={product.category}
              description = {product.description}
              brand={product.brand}
          />
          ))
        }
      </>
    )
}