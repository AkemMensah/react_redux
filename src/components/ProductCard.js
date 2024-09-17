// import React from 'react';
import { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Alert } from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';
 
 
const Products = () => {
    // const [products,getProducts] = useState([]);
    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products)

    useEffect(()=>{

        //dispatch an action for fetchProducts
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(results => getProducts(results));
    },[]);

    if (status === StatusCode.LOADING){
      return <p>Loading...</p>
    }
    if(status === StatusCode.ERROR){
      return <p>Something went wrong! Try again later</p>
      // return <Alert key='danger' variant='danger'>Something went wrong!!! Try again later</Alert>
    }
    // const dispatch = useDispatch();
    const addToCart = (product) => {
      //dispatch add action
      dispatch(add(product))
     }

    const cards = products.map(product => {
        return (
        <div className='col-md-3'>
            <Card key={product.id} >
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        GHS: {product.price}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
                    </Card.Footer>
            </Card>
        </div>
        )
    })
  return (
    <>
    <div>
      {/* <h1>Products Dashboard</h1> */}
      <div className='row'>
        {cards}
      </div>
    </div>
    </>
  )
}

export default Products;
