import ItemCardCSS from './ItemCard.module.css';
import './ItemCardCustom.css';
import { useState } from "react";
import { Container, Dropdown, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function ItemCard({ item, setCart, setShowCanvas }) {

const [pickSize, setPickSize] = useState('')
const [qtyColor, setQtyColor] = useState('')



function handleChange(e) {


// let items = JSON.parse(localStorage.getItem("cart"));
// let updatedArray = items.map((i) => { 
//     if(i.id === item.id) {
//     i.quantity = e.target.value
//     return i
// } else {return i}

// })

// items = JSON.stringify(updatedArray);
// localStorage.setItem("cart", items)
// setCart(updatedArray)
// setPickSize('Qty: ' + e.target.value)
// setQtyColor('qtyblue')
//updates database for quantity update
}




// function handleClick() {
//     let items = JSON.parse(localStorage.getItem("cart"));
//     let filteredList = items.filter((i) => i.id !== item.id)
//     items = JSON.stringify(filteredList);
//     localStorage.setItem("cart", items)
//     // updated database
//     setCart(filteredList)
//     //updated state
// }
//deletes card

function handleClickName() {
    setShowCanvas(false)
}



    return (

        <Card className={`flex-row flex-wrap rounded-0 px-4 py-4 ${ItemCardCSS.cardBorder}`}>
        <button type="button" className={`${ItemCardCSS.closeButton} btn-close px-3 py-3`}  aria-label="Close" ></button>
   
            <img className={ItemCardCSS.imgSize} src={require('./top1.png')} alt=""/>
 
        <Card.Body className="px-3 py-0">
    
            <Card.Title>$20.00</Card.Title>
          
            <NavLink to={'/itempage/'} className={ItemCardCSS.itemName} onClick={handleClickName}><Card.Text>Shoes</Card.Text></NavLink>
            
        <Container className="size-section2">

            <div className={ItemCardCSS.ItemSizeFont}>S</div>
            <div className={ItemCardCSS.divider}>|</div>

        <Dropdown>
            <Dropdown.Toggle id={qtyColor} as='button' className={`btn-sm ${ItemCardCSS.QtyDropdown}`} >
                {pickSize ? pickSize : `Qty : 4`}

                {/* default quantity amount */}
            </Dropdown.Toggle>

            <Dropdown.Menu onToggle={handleChange}>
                <Dropdown.Item as='button' value='1' onClick={handleChange} > Qty : 1</Dropdown.Item>
                <Dropdown.Item as='button' value='2' onClick={handleChange} > Qty : 2</Dropdown.Item>
                <Dropdown.Item as='button' value='3' onClick={handleChange} > Qty : 3</Dropdown.Item>
                <Dropdown.Item as='button' value='4' onClick={handleChange} > Qty : 4</Dropdown.Item>
                <Dropdown.Item as='button' value='5' onClick={handleChange} > Qty : 5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
   
        </Container>

        </Card.Body>

    </Card>    

    )
}

export default ItemCard