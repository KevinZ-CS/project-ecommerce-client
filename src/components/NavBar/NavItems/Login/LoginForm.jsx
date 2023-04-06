import LoginFormCSS from './LoginForm.module.css';
import { useState } from "react";
import { Modal, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { showLogin, showUserAcc } from '../../../modalsSlice';
import { userLogin } from '../../../usersSlice';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {

const dispatch = useDispatch()
const navigate = useNavigate()
const showLoginForm = useSelector((state) => state.modals.showLogin)

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState(null);
const [showPassword, setShowPassword] = useState(false);

const handleClose = () => {
dispatch(showLogin(false))
setEmail('');
setPassword('');
setErrors(null)
}

function handeClickEye(e) {
e.preventDefault();
setShowPassword(!showPassword);
}

async function handleSubmit(e) {
e.preventDefault();
const response = await fetch('/api/userLogin', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
})
const data = await response.json();
if (response.ok) {
    dispatch(userLogin(data))
    setErrors(null)
    setEmail('')
    setPassword('')
    dispatch(showLogin(false))
    navigate('/')
    dispatch(showUserAcc(true))
    } else {
        setErrors(data.errors);
    }
    }

function handleDemoClick() {
setEmail("janedoe@gmail.com")
setPassword("JaneDoe12!")
}

return (  
    <>
    <Modal show={showLoginForm} onHide={handleClose} className='modal-sm mt-3'>
    <Modal.Header closeButton className="border-0 pb-0">        
    </Modal.Header>
    <Modal.Title className='text-center' >Login</Modal.Title>
    <Modal.Body>

        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-2" >
        <Form.Control
        type="email"
        placeholder="Email"
        autoFocus
        className={`${LoginFormCSS.loginInput}`}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
        </Form.Group>

        <InputGroup className="mb-0" >
        <Form.Control
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        className={`${LoginFormCSS.loginInput}`}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />

        {password ?
        <button className={`${LoginFormCSS.eye} border border-dark`} onClick={handeClickEye}>{
            showPassword ?  <FontAwesomeIcon icon={faEyeSlash} /> :
            <FontAwesomeIcon icon={faEye} /> }
        </button> : null}

        {errors ? <Form.Label className={`${LoginFormCSS.errorMsg} text-danger col-12 pt-2`}>*{errors}</Form.Label> : null}

        </InputGroup>

        <div className="text-center mb-4 mt-4">
            <a className={LoginFormCSS.loginAdmin} href="/adminLogin">Click here for admin login.</a>
        </div>
        
        <hr className="mt-0" />

        <p className={`${LoginFormCSS.terms} text-center text-muted mb-3`}>
        I agree to the Kévin Terms and the Website Terms of Use. For more information about our privacy policy, see our Privacy Policy.
        </p>
        
        <Row className='px-3'>
            <Col className='text-center mb-3 col-6'>
            <button className={`${LoginFormCSS.button}`} type="submit" >Sign In</button>
            </Col>
            <Col className='text-center mb-3 col-6'>
            <button className={`${LoginFormCSS.buttonDemo}`} onClick={handleDemoClick} >Demo User</button>
            </Col>
        </Row>

        <div className={`${LoginFormCSS.createAcc} text-center mb-3 mx-auto`}>
        <span>New to Kévin? </span>
        <NavLink to='/signup' className={LoginFormCSS.noStyle} onClick={handleClose}>Create Account</NavLink>
        </div>

        </Form>

    </Modal.Body>    
    </Modal>
    </> );
  }

  export default LoginForm