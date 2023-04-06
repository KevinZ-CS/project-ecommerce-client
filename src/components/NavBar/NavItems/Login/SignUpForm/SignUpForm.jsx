import SignUpFormCSS from './SignUpForm.module.css';
import { useState } from "react";
import { Form, Container, Row, InputGroup, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { showLogin } from '../../../../modalsSlice';
import { useDispatch } from 'react-redux';


function SignUpForm() {

const dispatch = useDispatch();
const navigate = useNavigate();
const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    access_type: 'Customer',
    email: '',
    terms_of_service: false,
    password: '',
    password_confirmation: ''
})

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPass, setShowConfirmPass] = useState(false);

function handeClickEye(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
}

function handeClickConfirmEye(e) {
    e.preventDefault();
    setShowConfirmPass(!showConfirmPass);
}

const [errors, setErrors] = useState({})
const { first_name, last_name, email, terms_of_service, password, password_confirmation } = errors

function handleSubmit(e) {
e.preventDefault();
submitAdminUser(user)

function submitAdminUser (data) {
    fetch("/api/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if(response.ok) {
            response.json().then((newUser) => {console.log(newUser)
            setUser({
                first_name: '',
                last_name: '',
                access_type: 'Customer',
                email: '',
                terms_of_service: false,
                password: '',
                password_confirmation: ''})
                setErrors({})
                navigate('/accountConfirmation')
                
            });
        } else {
            response.json().then((errorData) => setErrors(errorData.errors));
        }
    })
} }

 return (
    <Container className={`${SignUpFormCSS.container}`}>
    <Row className='justify-content-center'>
    <Col lg={12} xl={11}>
    <Card className='text-black rounded-0 border-0'>
    <Card.Body className='p-md-5'>
    <Row className='justify-content-center'>
    <Col md={10} lg={6} xl={5} >
    <p className={`${SignUpFormCSS.titleFontSize} text-center h1 fw-bold mb-4 mt-4`}>Create Account</p>
        <Form className='mx-md-4 adminSignUp' onSubmit={handleSubmit} autoComplete='off'>

        <Row className='mb-2'>
        <Col>
        <Form.Group>
        <Form.Control
            type="text"
            placeholder="First name"
            className='shadow-none rounded-0 border-dark'
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value})}
        />
        {first_name ? <Form.Label className={`${SignUpFormCSS.errorMsg} text-danger`}>*{first_name}</Form.Label> : null}
        </Form.Group>
        </Col>

        <Col>
        <Form.Group>
        <Form.Control
            type="text"
            placeholder="Last name"
            className='shadow-none rounded-0 border-dark'
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value})}
        />
        {last_name ? <Form.Label className={`${SignUpFormCSS.errorMsg} text-danger`}>*{last_name}</Form.Label> : null}
        </Form.Group>
        </Col>
        </Row>

        <Form.Group className='mb-2'>
        <Form.Control
        type="text"
        placeholder="E-mail"
        className='shadow-none rounded-0 border-dark'
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})} />
        {email ? <Form.Label className={`${SignUpFormCSS.errorMsg} text-danger`}>*{email}</Form.Label> : null}
        </Form.Group>

        <InputGroup className='mb-2 position-relative'>
        <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            className= 'shadow-none rounded-0 border-dark' />

            {user.password ? <button className={`${SignUpFormCSS.eye} shadow-none border border-dark`} onClick={handeClickEye}>{
            showPassword ?  <FontAwesomeIcon icon={faEyeSlash} /> :
            <FontAwesomeIcon icon={faEye} /> 
            }</button> : null}

            {password ? <Form.Label className={`${SignUpFormCSS.errorMsg} text-danger`}>*{password}</Form.Label> : null}
        </InputGroup>

        <InputGroup className='mb-3 position-relative'>
        <Form.Control
            type={showConfirmPass ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={user.password_confirmation}
            onChange={(e) => setUser({...user, password_confirmation: e.target.value})}
            className='shadow-none rounded-0 border-dark' />

            {user.password_confirmation ? <button className={`${SignUpFormCSS.eye} shadow-none border border-dark`} onClick={handeClickConfirmEye}>{
            showConfirmPass ?  <FontAwesomeIcon icon={faEyeSlash} /> :
                <FontAwesomeIcon icon={faEye} /> 
                }</button> : null }

            {password_confirmation ? 
            <Form.Label className={`${SignUpFormCSS.errorMsg} text-danger col-12`}>*{password_confirmation}</Form.Label> : null}

        </InputGroup>

        <div className={`${SignUpFormCSS.check} text-center mb-3`}>
        <input className="form-check-input me-2 shadow-none" type="checkbox" value={user.terms_of_service} onChange={() => setUser({...user, terms_of_service: !user.terms_of_service})} checked={user.terms_of_service}/>
        <label className='form-check-label'>
            I agree all statements in <NavLink to='/termsOfUse'>Terms of Use</NavLink>
        </label>
        <br />
        {terms_of_service ? <label className={`${SignUpFormCSS.errorMsg} text-danger`}>*{terms_of_service}</label> : null}
        </div>

        
        <div className='text-center'>
        <button type='submit' className={`${SignUpFormCSS.button}`} >Create</button>
        </div>

        <div>
        <p className={`${SignUpFormCSS.footerText} text-center text-muted mt-3 mb-`}>Already have an account? 
        <span 
        className="fw-bold text-body" >
        <button type='button' className={`${SignUpFormCSS.loginbtn} px-0`} onClick={() => dispatch(showLogin(true))}>
        <u>Login here</u>
        </button></span>
        </p>
        </div>
                        
        </Form>
    </Col>
    </Row>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container> )
}

export default SignUpForm