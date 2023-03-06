import { useState } from "react";
import { Container, Row } from 'react-bootstrap';



function AddCartButton({ item, size, cart, setCart, setShowCanvas }) {

    // const [cartMessageShow, setCartMessageShow] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [qtylimit, setQtyLimit] = useState(false)

   


    function handlePlus() {
        setQuantity(quantity + 1)
        
    }
    
    function handleMinus() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    
    // function inputQuantity(e) {
    //     const result = e.target.value.replace(/\D/g, '')
    //     setQuantity(result)
    // }

    //need to double check this

 
    function onAddcart() {

        let flag = false
        let overAmount = false

        let cartItem = {
            'id': size + item.name,
            'oldid': item.id,
            'name': item.name,
            'image': item.image,
            'price': item.price, 
            'size': size,
            'quantity': quantity
        }


        if(cart.length > 0) {

            let newArray = cart.map((item) => {
                if(cartItem.id === item.id && cartItem.size === item.size && (quantity + item.quantity) <= 5) {
                    item.quantity = cartItem.quantity + item.quantity
                    item.price = cartItem.price 
                    // /cartItem.quantity * item.quantity
                    flag = true
                    return item
                    // flag if the item was updated
                  
                } else if(cartItem.id === item.id && cartItem.size === item.size && (quantity + item.quantity) > 5)
                {setQtyLimit(true)
                    overAmount = true
            }
                
                else {return item}
            })

              //this checks to see if current item in existing array cart needs to be updated, the newItem has not been added in yet if it need to be added


            if(flag) {
                setCart(newArray) 
                // setCartMessageShow(true)
                setQtyLimit(false)

                setShowCanvas(true)
                //if flagging is set to true then it means the new item was used to update existing array in which case no new item needs to aded
            } else { 
                if(!overAmount && quantity <= 5) {
                setCart([...cart, cartItem])
                // setCartMessageShow(true)
                setQtyLimit(false)

                setShowCanvas(true)
            }
                

                else {setQtyLimit(true)}
            }

        } else {
            if(quantity <= 5) {
            setCart([cartItem])
            // setCartMessageShow(true)
            setQtyLimit(false)

            setShowCanvas(true)
        }

            else {setQtyLimit(true)}
        }

     
   
       
    }


    return (
        <Container className=" px-0 mt-3">
            {qtylimit ? <div className="mb-2 quantity-limit">Quantity is limited to 5 per customer for each size.</div> : null}
        <Row>
            <div className="spinner-width">
                <div className="input-group number-spinner spinner-container">
                    <span className="input-group-btn">
                        <button className="btn btn-default quantityBtn rounded-0 btn-sm px-2 inputButton"  onClick={handleMinus}>-</button>
                    </span>

                    <input type="text" className=" text-center input-field" value={quantity} disabled={true}/>
            
                    {/* <input type="text" className=" text-center input-field" onChange={inputQuantity} value={quantity} /> */}
                    {/* this input is glitchy need to fix */}
                
                    <span className="input-group-btn ">
                        <button className="btn btn-default quantityBtn rounded-0 btn-sm px-2 inputButton"  onClick={handlePlus}>+</button>
                    </span>
                </div>
            </div>

            <div className="col-lg-5 cartDiv">
            <button className="btn rounded-0 addCart" onClick={onAddcart} >Add to Cart</button>
            </div>
        </Row>
        {/* <AddCartMessage showMessage={cartMessageShow} setMessage={setCartMessageShow} item={item} /> */}

        
      
    </Container>
    )
}

export default AddCartButton