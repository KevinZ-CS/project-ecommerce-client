import AddCartButtonCSS from './AddCartButton.module.css';
import './AddCartButtonCustom.css';
import { useState } from "react";
import { Container, Row, Dropdown, Col, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';



function AddCartButton({ item, size, cart, setCart, setShowCanvas }) {

    const [pickSize, setPickSize] = useState('')


function handleChange(e) {
    setPickSize(e.target.value)
}



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


 
        <Dropdown as={ButtonGroup}  className='qty' >
            <Dropdown.Toggle as='button' className={` btn`} >
                {pickSize ? pickSize : '1'}
            </Dropdown.Toggle>

            <Dropdown.Menu onToggle={handleChange}>
              <Dropdown.Item as='button' value='1' onClick={handleChange} className='dropdownItemBg' > 1</Dropdown.Item>
              <Dropdown.Item as='button' value='2' onClick={handleChange} className='dropdownItemBg'> 2</Dropdown.Item>
              <Dropdown.Item as='button' value='3' onClick={handleChange} className='dropdownItemBg'> 3</Dropdown.Item>
              <Dropdown.Item as='button' value='4' onClick={handleChange} className='dropdownItemBg '> 4</Dropdown.Item>
            <Dropdown.Item as='button' value='5' onClick={handleChange} className='dropdownItemBg'> 5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
       <Button className={AddCartButtonCSS.addCartBtn}>Add to Cart</Button>        
      
    </Container>
    )
}

export default AddCartButton