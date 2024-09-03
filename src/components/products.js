import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 
const Products = () => {
    const [products,getProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(results => getProducts(results));
    },[]);

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
                    <Button variant="primary">Add To Cart</Button>
                    </Card.Footer>
            </Card>
        </div>
        )
    })
    console.log(cards);
  return (
    <>
    <div>
      <h1>Products Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
    </>
  )
}

export default Products;
