import ItemNotAvailableCSS from "./ItemNotAvailable.module.css";
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { updateAddedAlert, updateUpdatedAlert } from '../../../components/itemsSlice';
import { useDispatch } from 'react-redux';

function ItemNotAvailable() {

const dispatch = useDispatch()
const navigate = useNavigate()

function handleClick() {
    dispatch(updateAddedAlert(false))
    dispatch(updateUpdatedAlert(false))
    navigate('/shop')
}

return (
       
<Container className={`${ItemNotAvailableCSS.margins} text-center`}>
<FontAwesomeIcon icon={faExclamationCircle} className={`${ItemNotAvailableCSS.exFont} mb-3`} />
<h1>Not Found</h1>
<p>This item is currently unavailable. Please check out our other offers.</p>
<Button className={`${ItemNotAvailableCSS.button} btn-dark`} onClick={handleClick}>Back to store</Button>
</Container> 
)
}

export default ItemNotAvailable;