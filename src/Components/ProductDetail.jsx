import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function ProductDetail(props) {
   const styleCard={
     //width:'18rem',
     marginLeft:'1rem',
     marginRight:'1rem',
     marginBottom:'1rem'
   }
    return (
    <Card style={styleCard}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
      <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link>
            <Link to={`/products/${props.productId}`}>
                <h6 className="card-title text-center">{props.title}</h6>
            </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;