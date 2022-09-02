import { Link } from 'react-router-dom';
import DefaultImage from '../assets/img-default.png'


function CardProduct(props) {
  const styleCard={
     marginLeft:'1rem',
     marginRight:'1rem',
     marginBottom:'1.5rem',
     boxShadow: '0.5rem 1rem rgba(0,0,0,.15)!important'
   }
    return (
<div className='product-card col-3 mx-auto mb-4' style={styleCard} >
		<div className="product-tumb">
    <img className='img-top'
            alt={props.title}
            src={props.img ? props.img :DefaultImage}
            onError={(e)=>{e.target.onerror = null; e.target.src= DefaultImage } }/>
		</div>
		<div className="product-details">
			<span className="product-category">{props.category}</span>
			<Link to={`/products/${props.productId}`} style={{ textDecoration: 'none' }}>
            <h6 className="card-title text-center card-link">{props.title}</h6>
            <p className='text-center'>{props.brand}</p>
        </Link>
			<div className="product-bottom-details">
				<div className="product-price">${props.price}</div>
				<div className="product-links">
				</div>
			</div>
		</div>
	</div>
  );
}

export default CardProduct;