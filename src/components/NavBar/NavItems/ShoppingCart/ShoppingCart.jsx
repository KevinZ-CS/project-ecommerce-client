import ShoppingCartCSS from './ShoppingCart.module.css';
import './ShoppingCartCustom.css';
import { Button, Offcanvas, Container } from 'react-bootstrap';
import ItemCard from './ItemCard/ItemCard';
import { showCart } from '../../../modalsSlice';
import { useSelector, useDispatch } from "react-redux";



function ShoppingCart() {
    
const dispatch = useDispatch()
const showShoppingCart = useSelector((state) => state.modals.showCart)
const orderList = useSelector((state) => state.orders.orderList)
const adminUser = useSelector((state) => state.users.adminUser )
const total = orderList.reduce((accumulator, currentvalue) => accumulator + (currentvalue.item.price * parseFloat(currentvalue.quantity)), 0)

function handleClose() {
    dispatch(showCart(false))
}

function handleCheckout() {
dispatch(showCart(false))

fetch('/api/checkout', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
    body: JSON.stringify(orderList),
}).then((response) => {
    if(response.ok) {
        response.json().then((r) => {
            if(r.url) {
                window.location.href = r.url
            }
            
        });
    } else {
        response.json().then((errorData) => console.log(errorData.errors));
    }
}) }
        
return (
    
    <Offcanvas show={showShoppingCart} onHide={handleClose} placement='end' className={ShoppingCartCSS.canvasSize}>
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>My Bag</Offcanvas.Title>
    
    </Offcanvas.Header>
    <hr  className="mt-0"/>
    <Offcanvas.Body className="py-0"> 
    
    
    { orderList && !adminUser ? orderList.map((item) => <ItemCard key={item.id} item={item}  />) : null }
    { orderList.length > 0 && !adminUser ? 
    
    <Container className='text-center'>
    <div className={`fw-bold ${ShoppingCartCSS.subtotal}`}>Subtotal: <span>${total.toFixed(2)}</span></div>
    <div>
    <Button className={`rounded-0 ${ShoppingCartCSS.button}`} onClick={handleCheckout}>
    CHECKOUT
    </Button>
    </div>
    </Container> : <div className="fw-bold">Your bag is currently empty.</div>}

    </Offcanvas.Body>    
    </Offcanvas> )
}

export default ShoppingCart