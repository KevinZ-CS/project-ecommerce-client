import ShoppingCartCSS from './ShoppingCart.module.css';
import './ShoppingCartCustom.css';
import { Button, Offcanvas, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import ItemCard from './ItemCard/ItemCard';



function ShoppingCart({ showCart, setShowCart }) {


    const handleClose = () => setShowCart(false);

  
    // const total = cart.reduce((accumulator, currentvalue) => accumulator + (currentvalue.price * parseFloat(currentvalue.quantity)), 0)

    return (
        <>
             <Offcanvas show={showCart} onHide={handleClose} placement='end' className={ShoppingCartCSS.canvasSize}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Bag</Offcanvas.Title>
               
                </Offcanvas.Header>
                <hr  className="mt-0"/>
                <Offcanvas.Body className="py-0">
                {/* {cart.map((item) => <BagItemCard key={item.id + `${item.size}`} item={item} setCart={setCart} setShowCanvas={setShowCanvas}/> )} */}
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                {/* { cart.length > 0 ?
                    <div>
                    <div className="fw-bold subtotal">Subtotal <span>${total.toFixed(2)}</span></div>
                    <NavLink to='/checkout' className='no-style-modal text-center'>
                    <Button className='totalCheckout rounded-0' onClick={handleClose}>
                        CHECKOUT
                    </Button></NavLink> </div>: 
                    <div className="fw-bold">Your bag is currently empty.</div>
                            }   */}
                
                <Container className='text-center'>
                    <div className={`fw-bold ${ShoppingCartCSS.subtotal}`}>Subtotal: <span>$200.00</span></div>
                    <div>
                    <NavLink to='/checkout'>
                    <Button className={`rounded-0 ${ShoppingCartCSS.button}`} onClick={handleClose}>
                        CHECKOUT
                    </Button>
                    </NavLink> 
                    </div>
                </Container>

                </Offcanvas.Body>    
            </Offcanvas>

        </>
    )
}

export default ShoppingCart