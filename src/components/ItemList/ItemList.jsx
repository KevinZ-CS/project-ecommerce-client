import ItemListCSS from './ItemList.module.css';
import { useState } from "react";
import { Container, Row, Alert, Modal } from 'react-bootstrap';
import Item from './Item/Item';
import { useSelector, useDispatch } from "react-redux";
import { updateAddedAlert, updateUpdatedAlert } from "../itemsSlice";
import { showDelete } from "../modalsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function ItemList() {

const [category, setCategory] = useState('All')
const itemsList = useSelector((state) => state.items.itemsList)
const showAddAlert = useSelector((state) => state.items.addedAlert)
const showUpdateAlert = useSelector((state) => state.items.updatedAlert)
const showDeleteModal = useSelector((state) => state.modals.showDeleteMsg)

const handleClose = () => dispatch(showDelete(false));

const dispatch = useDispatch()

function handleClick(e) {
    setCategory(e.target.value)
}

const itemsDisplay = itemsList&&itemsList.filter(
    (item) => category ==='All' || item.category === category
    );

return (
    <>
    <Container>
    <Alert show={showUpdateAlert} className={`${ItemListCSS.alert}`}  dismissible onClose={() => dispatch(updateUpdatedAlert(false))}>
    <FontAwesomeIcon icon={faCheckCircle} className={`${ItemListCSS.checkIcon}`} />
    <span className={`${ItemListCSS.alertMessage}`}>Your changes have been saved</span>
    </Alert>

    <Alert show={showAddAlert} className={`${ItemListCSS.alert}`}  dismissible onClose={() => dispatch(updateAddedAlert(false))} >
    <FontAwesomeIcon icon={faCheckCircle} className={`${ItemListCSS.checkIcon}`} />
    <span className={`${ItemListCSS.alertMessage}`}>Item has successfully been added!</span>
    </Alert>
    </Container>

    <Container className='py-5 mt-5 mb-3' >
        <div className="text-center">
            <h2 className={`${ItemListCSS.title} position-relative d-inline-block`}>Shop All</h2>
        </div>

        <Row className="g-0">
        <div className = "d-flex flex-wrap justify-content-center mt-5">
        <button type = "button" value='All' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} autoFocus onClick={handleClick}>All</button>
        <button type = "button" value='Top' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onClick={handleClick}>Tops</button>
        <button type = "button" value='Bottom' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onClick={handleClick}>Bottoms</button>
        <button type = "button" value='Accessory' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onClick={handleClick}>Accessories</button>
        </div>
                
        <Container>
        <Row>
        {itemsDisplay.map((item) => <Item key={item.id} item={item} />)}    
        </Row>
        </Container>
                
        </Row>
    </Container>
        
    <Modal show={showDeleteModal} className='modal-sm mt-3' onHide={handleClose}>
        
    <Modal.Header closeButton className={`${ItemListCSS.modalHeader} `} />
    <Modal.Title className='text-center'> <FontAwesomeIcon icon={faCheckCircle} className={`${ItemListCSS.checkIcon2}`} /></Modal.Title>
    <Modal.Body className='text-center text-muted'>Item has been successfully deleted.</Modal.Body> 
    </Modal>
    </>
    )
}

export default ItemList