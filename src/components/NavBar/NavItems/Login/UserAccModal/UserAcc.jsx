import UserAccountCSS from './UserAcc.module.css';
import './UserAccCustom.css';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { showUserAcc } from '../../../../modalsSlice';
import { useSelector, useDispatch } from "react-redux";
import { deleteUserSession, userDelete } from '../../../../usersSlice'

function UserAcc() {
    
const navigate = useNavigate()
const dispatch = useDispatch()
const showAcc = useSelector((state) => state.modals.showUserAcc)
const user = useSelector((state) => state.users.user )

function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function handleClose() {
dispatch(showUserAcc(false))
}

function handleLogoutClick() {
if (user) {
dispatch(deleteUserSession())
dispatch(userDelete())
dispatch(showUserAcc(false))
navigate('/') }
else { return null }
}
           
return (
   
    <Offcanvas show={showAcc} onHide={handleClose} placement='end' className={UserAccountCSS.canvasSize}>
    <Offcanvas.Header closeButton>
    <Offcanvas.Title className='text-white'>Account</Offcanvas.Title>
    </Offcanvas.Header>

    <Offcanvas.Body className="py-0"> 
    <div className='text-center'>
    <FontAwesomeIcon icon={faUserCircle}  className={UserAccountCSS.headImg}/>
    </div>
    <br />
    <div className='text-center'>
    <h3 className='text-white'>{ user ? `Welcome ${capitalized(user.first_name)}!` : null}</h3>
    </div>

    <div className='text-center'>
        <Button className={`rounded-0 btn-dark ${UserAccountCSS.button}`} onClick={handleLogoutClick}>
            Logout
        </Button>
    </div>
    
    </Offcanvas.Body>    
    </Offcanvas> )
}

export default UserAcc