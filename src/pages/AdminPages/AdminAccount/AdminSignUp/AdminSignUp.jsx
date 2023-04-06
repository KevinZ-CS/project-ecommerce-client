import AdminSignUpCSS from './AdminSignUp.module.css';
import './AdminSignUpCustom.css';
import { useState } from "react";
import { Form, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";

function AdminSignUp() {

const navigate = useNavigate()
const [adminUser, setAdminUser] = useState({
    first_name: '',
    last_name: '',
    access_type: 'Admin',
    email: '',
    terms_of_service: false,
    password: '',
    password_confirmation: ''
    })

const [errors, setErrors] = useState({})
const { first_name, last_name, access_type, email, terms_of_service, password, password_confirmation } = errors

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

function handleSubmit(e) {
    e.preventDefault();
    submitAdminUser(adminUser)

    function submitAdminUser (data) {
        fetch("/api/adminSignUp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok) {
                response.json().then((newAdminUser) => {console.log(newAdminUser)
                setAdminUser({
                    first_name: '',
                    last_name: '',
                    access_type: 'Admin',
                    email: '',
                    terms_of_service: false,
                    password: '',
                    password_confirmation: ''})
                    setErrors({})
                    navigate('/adminAccountConfirmation')
                });
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        })
    } }

    return (
    <Container className={`${AdminSignUpCSS.container}`}>
    <Row className='justify-content-center'>
    <Col lg={12} xl={11} className=''>
    <Card className='text-black rounded-0 border-0'>
        <Card.Body className='p-md-5'>
            <Row className='justify-content-center'>
            <Col md={10} lg={6} xl={5}  className='order-2 order-lg-2'>
            <p className={`${AdminSignUpCSS.titleFontSize} text-center h1 fw-bold mb-4 mt-4`}>Create Account</p>
            <Form className='mx-md-4 adminSignUp' onSubmit={handleSubmit} autoComplete='off'>

            <Row className='mb-0'>
            <Col>
            <Form.Group>
            <Form.Control
                type="text"
                placeholder="First name"
                className='shadow-none rounded-0 border-dark'
                value={adminUser.first_name}
                onChange={(e) => setAdminUser({...adminUser, first_name: e.target.value})}
            />
            {first_name ? <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{first_name}</Form.Label> : null}
            </Form.Group>
            </Col>

            <Col>
            <Form.Group>
            <Form.Control
                type="text"
                placeholder="Last name"
                className='shadow-none rounded-0 border-dark'
                value={adminUser.last_name}
                onChange={(e) => setAdminUser({...adminUser, last_name: e.target.value})}
            />
                {last_name ? <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{last_name}</Form.Label> : null}
            </Form.Group>
            </Col>
            </Row>

            <Row className='mb-2'>
            <Col>
            <Form.Group>
            <Form.Label>Access Type:</Form.Label>
            <Form.Select
               className='shadow-none rounded-0 border-dark'
               value={adminUser.access_type}
               onChange={(e) => setAdminUser({...adminUser, access_type: e.target.value})} >
            <option value='Admin'>Admin</option>
            </Form.Select>
            {access_type ? <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{access_type}</Form.Label> : null}
            </Form.Group>
            </Col>
            </Row>

            <Form.Group className='mb-2'>
            <Form.Control
                type="text"
                placeholder="E-mail"
                className='shadow-none rounded-0 border-dark'
                value={adminUser.email}
                onChange={(e) => setAdminUser({...adminUser, email: e.target.value})} />
                {email ? <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{email}</Form.Label> : null}
            </Form.Group>


            <InputGroup className='mb-2 position-relative'>
            <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={adminUser.password}
                onChange={(e) => setAdminUser({...adminUser, password: e.target.value})}
                className='shadow-none rounded-0 border-dark' />
            {adminUser.password ?
            <button className={`${AdminSignUpCSS.eye} border border-dark`} onClick={handeClickEye}>{
            showPassword ?  <FontAwesomeIcon icon={faEyeSlash} /> :
            <FontAwesomeIcon icon={faEye} /> 
            }
            </button> : null}
            {password ? <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{password}</Form.Label> : null}
            </InputGroup>

            <InputGroup className='mb-3 position-relative'>
            <Form.Control
                type={showConfirmPass ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={adminUser.password_confirmation}
                onChange={(e) => setAdminUser({...adminUser, password_confirmation: e.target.value})}
                className='shadow-none rounded-0 border-dark' />

            { adminUser.password_confirmation ? 
            <button className={`${AdminSignUpCSS.eye} border border-dark`} onClick={handeClickConfirmEye}>{
            showConfirmPass ?  
            <FontAwesomeIcon icon={faEyeSlash} /> :
            <FontAwesomeIcon icon={faEye} /> 
            }
            </button> : null }
            {password_confirmation ? 
            <Form.Label className={`${AdminSignUpCSS.errorMsg} text-danger col-12`}>*{password_confirmation}</Form.Label> : null}

            </InputGroup>

            <div className={`${AdminSignUpCSS.check} text-center mb-3`}>
            <input className="form-check-input me-2 shadow-none" type="checkbox" value={adminUser.terms_of_service} onChange={() => setAdminUser({...adminUser, terms_of_service: !adminUser.terms_of_service})} checked={adminUser.terms_of_service}/>
            <label className='form-check-label'>
                I agree all statements in <NavLink to='/termsOfUse'>Terms of Use</NavLink>
            </label>
            <br />
            {terms_of_service ? <label className={`${AdminSignUpCSS.errorMsg} text-danger`}>*{terms_of_service}</label> : null}
            </div>
            <button type='submit' className={`${AdminSignUpCSS.button}`} >Create</button>
        
            </Form>
            </Col>

            <Col md={10} lg={6} xl={7} className='d-flex align-items-center order-1 order-lg-1'>
            <img src={require('../../../../assets/createAcc.png')}
            className="img-fluid" alt="Sample image" />
            </Col>

            <Col className='order-2 order-lg-2 col-12'>
            <p className={`${AdminSignUpCSS.footerText} text-center text-muted mt-3 mb-`}>Already have an account? 
            <span 
            className="fw-bold text-body" >
            <button type='button' className={`${AdminSignUpCSS.loginbtn} px-0`}><NavLink to="/adminLogin">Login here</NavLink></button>
            </span>
            </p>
            </Col>

            </Row>

        </Card.Body>
    </Card>
    </Col>     
    </Row>
    </Container> );
  }

  export default AdminSignUp