import { useSelector,useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state =>state.cart);

  const dispatch = useDispatch()
  const removeFromCart = (id)=> {
    // dispatch remove form cart action
    dispatch(remove(id));
  }
  const cards = products.map(product => {
    return (
    <div className='col-md-12 '>
        <Card key={product.id} >
            <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    GHS: {product.price}
                </Card.Text>
                <Card.Text>
                  { product.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white',}}>
                <Button variant="primary" style={{marginRight:'10px'}}>Buy Item</Button>
                <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
                </Card.Footer>
        </Card>
    </div>
    )
})
  return (
    <>
      <div className='row'>
        <h1>Cart Items</h1>
        { cards }
      </div>
    </>
  )
}

export default Cart;
