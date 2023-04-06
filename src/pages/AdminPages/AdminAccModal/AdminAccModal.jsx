import AdminAccountCSS from './AdminAccModal.module.css';
import './AdminAccCustom.css';
import { Button, Offcanvas, Container, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faAdd, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { showAdminUserAcc } from '../../../components/modalsSlice';
import { useSelector, useDispatch } from "react-redux";
import { deleteAdminSession, adminUserDelete } from '../../../components/usersSlice';


function AdminAcc() {
    
const navigate = useNavigate()
const dispatch = useDispatch()
const showAcc = useSelector((state) => state.modals.showAdminUserAcc)
const adminUser = useSelector((state) => state.users.adminUser )

function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function handleClose() {
    dispatch(showAdminUserAcc(false))
}

function handleLogoutClick() {
if (adminUser) {
    dispatch(deleteAdminSession())
    dispatch(adminUserDelete())
    dispatch(showAdminUserAcc(false))
    navigate('/') }
else { return null }
    }
        
return (

    <Offcanvas show={showAcc} onHide={handleClose} placement='start' className={AdminAccountCSS.canvasSize}>

    <Offcanvas.Header closeButton>
    <Offcanvas.Title></Offcanvas.Title>
    </Offcanvas.Header>

    <Offcanvas.Body className="py-0"> 
    <div className='text-center'>
    <FontAwesomeIcon icon={faUserCircle}  className={AdminAccountCSS.headImg}/>
    </div>
    <br />
    <div className='text-center'>
    <h3 className='text-white'>{ adminUser ? `Welcome ${capitalized(adminUser.first_name)}!` : null}</h3>
    </div>
    <div className='text-center text-white'>Admin</div>

    <Container className='mt-4'>
    <Row>

    <Col className='col-12 mb-3'>
    <FontAwesomeIcon icon={faAdd} className={`${AdminAccountCSS.icon}`}/>
    <NavLink to='/addItemForm' className={`${AdminAccountCSS.noStyle} px-2`} onClick={handleClose}>Add Item</NavLink>
    </Col>

    <Col className='col-12 mb-3'>
    <FontAwesomeIcon icon={faEdit}  className={`${AdminAccountCSS.icon}`}/>
    <NavLink to='/shop' className={`${AdminAccountCSS.noStyle} px-2`} onClick={handleClose}>Edit Item</NavLink>
    </Col>

    <Col className='col-12'>
    <FontAwesomeIcon icon={faTrash}  className={`${AdminAccountCSS.icon}`}/>
    <NavLink to='/shop' className={`${AdminAccountCSS.noStyle} px-2`} onClick={handleClose}>Delete Items</NavLink>
    </Col>

    </Row>
    </Container>

    <div className='text-center'>
    <Button className={`rounded-0 btn-dark ${AdminAccountCSS.button}`} onClick={handleLogoutClick}>
        Logout
    </Button>
    </div>
    </Offcanvas.Body>    
    </Offcanvas> )
}

export default AdminAcc