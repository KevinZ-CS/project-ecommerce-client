import ItemCardCSS from './ItemCard.module.css';
import './ItemCardCustom.css';
import { Container, Dropdown, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { deleteOrder, orderDeleted, updateOrderList, addOrderToList } from '../../../../ordersSlice';
import { useDispatch, useSelector } from "react-redux";

function ItemCard({ item, setShowCanvas }) {

const dispatch = useDispatch()
const orderList = useSelector((state) => state.orders.orderList)

function handleDelete() {
    dispatch(deleteOrder(item.id))
    dispatch(orderDeleted(item))
}

function pluck(array, key) {
    return array.map(o => o[key]);
  }

function handleClickName() {
    setShowCanvas(false)
}

function handleChangeQuantity(e) {
e.preventDefault();
submitAddToCart()

function submitAddToCart () {
    fetch("/api/addToCart", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            id: item.item.id,
            quantity: parseInt(e.target.value),
            size: item.size,
        })
    })
    .then((response) => {
        if(response.ok) {
            response.json().then((item) => {
                if(pluck(orderList, 'id').includes(item.id)) {
                dispatch(updateOrderList(item))
            } else {
                dispatch((addOrderToList(item)))
            }  }); } else {
            response.json().then((errorData) => console.log(errorData.errors));
        }
    })
} 
}

return (

    <Card className={`flex-row flex-wrap rounded-0 px-4 py-4 ${ItemCardCSS.cardBorder}`}>
    <button type="button" className={`${ItemCardCSS.closeButton} btn-close px-3 py-3`}  aria-label="Close"  onClick={handleDelete}></button>   
    <img className={ItemCardCSS.imgSize} src={item.item.featured_image.url} alt=""/>
    <Card.Body className="px-3 py-0">
        <Card.Title>${item.total}</Card.Title>  
        <NavLink to={`/items/${item.item.id}`} className={ItemCardCSS.itemName} onClick={handleClickName}><Card.Text>{item.item.name}</Card.Text></NavLink>
            
    <Container className="selectSize">

    <div className={ItemCardCSS.ItemSizeFont}>{item.size}</div>
    <div className={ItemCardCSS.divider}>|</div>

    <Dropdown>
    <Dropdown.Toggle as='button' className={`btn-sm ${ItemCardCSS.QtyDropdown}`} >
        Qty : {item.quantity}
    </Dropdown.Toggle>

    <Dropdown.Menu onToggle={handleChangeQuantity}>
    <Dropdown.Item as='button' value='1' onClick={handleChangeQuantity} className={`${ItemCardCSS.dropdownItemBg}`}> Qty : 1</Dropdown.Item>
    <Dropdown.Item as='button' value='2' onClick={handleChangeQuantity} className={`${ItemCardCSS.dropdownItemBg}`}> Qty : 2</Dropdown.Item>
    <Dropdown.Item as='button' value='3' onClick={handleChangeQuantity} className={`${ItemCardCSS.dropdownItemBg}`}> Qty : 3</Dropdown.Item>
    <Dropdown.Item as='button' value='4' onClick={handleChangeQuantity} className={`${ItemCardCSS.dropdownItemBg}`}> Qty : 4</Dropdown.Item>
    <Dropdown.Item as='button' value='5' onClick={handleChangeQuantity} className={`${ItemCardCSS.dropdownItemBg}`}> Qty : 5</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
   
     </Container>

    </Card.Body>

    </Card> )
}

export default ItemCard