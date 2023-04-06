import ItemCSS from './Item.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import { deleteItem, itemDeleted, updateAddedAlert, updateUpdatedAlert } from '../../itemsSlice';
import { showDelete  } from '../../modalsSlice';
import { useDispatch, useSelector } from "react-redux";

function Item({ item }) {

const navigate = useNavigate()
const dispatch = useDispatch()

const adminUser = useSelector((state) => state.users.adminUser)

function handleDelete() {
    dispatch(deleteItem(item.id))
    dispatch(itemDeleted(item))
    dispatch(showDelete(true))
    dispatch(updateAddedAlert(false))
    dispatch(updateUpdatedAlert(false))
    navigate('/shop')
}
function handleEdit() {
    navigate(`/editItemForm/${item.id}`)
    }

function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

return (
    <Col xl={3} lg={4} md={6}>
    <Card style={{ width: '16rem' }} className='m-1 w-100 border-0'> 
    <Card.Header className={`${ItemCSS.cardHeader}`} >
        {adminUser ?   <>
        <button type='button' className={`${ItemCSS.editButton} border-0 bg-white`} onClick={handleEdit}>Edit</button>
        <button type="button" className={`${ItemCSS.closeButton} border-0 bg-white  `}  aria-label="Close" onClick={handleDelete} >Delete</button></> :
        null }
    </Card.Header>

    <Card.Body >
        <NavLink to={'/items/'+ `${item.id}`}>
        <img className='w-100' src={item.featured_image.url} alt=""/>
        { item.sub_category === "new" || item.sub_category === "sale" ?
        <span 
        className=
        { adminUser ? `${ItemCSS.imgSpan2} position-absolute bg-dark d-flex align-items-center justify-content-center` :
            `${ItemCSS.imgSpan} position-absolute bg-dark d-flex align-items-center justify-content-center` }>
        {capitalized(item.sub_category)}
        </span> :
        null }
        </NavLink>
        <div className = "text-center">
            <NavLink to={'/items/'+ `${item.id}`} className={`${ItemCSS.itemName}`}>
            <p  className = "text-capitalize my-1">{item.name}</p>
            </NavLink>
        <div className = "fw-bold">${item.price}</div>
        </div>
    </Card.Body>
    </Card>
    </Col>
    
                        
    )
}

export default Item