import AdminLoginCSS from './AdminLogin.module.css';
import './AdminLoginCustom.css';
import { useState } from "react";
import { Form, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminUserLogin } from '../../../../components/usersSlice';
import { showAdminUserAcc } from '../../../../components/modalsSlice';


function AdminLogin() {
    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [errors, setErrors] = useState(null)

const dispatch = useDispatch()
const navigate = useNavigate()

async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/adminLogin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    const data = await response.json();
    if (response.ok) {
        dispatch(adminUserLogin(data))
        setErrors(null)
        setEmail('')
        setPassword('')
        navigate('/')
        dispatch(showAdminUserAcc(true))
        } else {
            setErrors(data.errors);
        }
        }

function handeClickEye(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
}

function handleDemoClick() {
    setEmail("johnsmith@gmail.com")
    setPassword("JohnSmith12!")
}

return (
    <Container className={`${AdminLoginCSS.container}`}>
    <Row className='justify-content-center text-center'>
    <Col lg={12} xl={11} className=''>
    <Card className='text-black rounded-0 border-0'>
    <Card.Body className='p-md-5'>
        <Row className='justify-content-center'>
            <Col md={10} lg={6} xl={5}  className='order-2 order-lg-2'>
                
            <FontAwesomeIcon icon={faUser} className={`${AdminLoginCSS.headImg}`}/> 
            <p className={`${AdminLoginCSS.titleFontSize} text-center h1 fw-bold mb-4 mt-4`}>Admin</p>
            <Form className='mx-md-4 adminLogin' onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                <Form.Control
                    type="text"
                    placeholder="E-mail"
                    className='shadow-none rounded-0 border-dark'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <InputGroup className='mb-3 position-relative'>
                <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='shadow-none rounded-0 border-dark' />

                { password ?   <button className={`${AdminLoginCSS.eye} border border-dark`} onClick={handeClickEye}>{
                showPassword ?  <FontAwesomeIcon icon={faEyeSlash} /> :
                <FontAwesomeIcon icon={faEye} /> 
                }
                </button> : null
                }

                {errors ? <Form.Label className={`${AdminLoginCSS.errorMsg} text-danger col-12 pt-2`}>*{errors}</Form.Label> : null}
                </InputGroup>
      
                <button type='submit' className={`${AdminLoginCSS.button} w-100 mb-2`} >Login</button>
                <button type='submit' className={`${AdminLoginCSS.button} w-100 mb-5`} onClick={handleDemoClick}>Demo Login</button>

            <p className={`${AdminLoginCSS.footerText} text-center text-muted mt-3 mb-`}>Don't have an account? <span 
            className="fw-bold text-body" ><button type='button' className={`${AdminLoginCSS.loginbtn} px-0`}><NavLink to='/adminSignUp'>Sign Up</NavLink></button></span>
            </p>
            </Form>
            </Col>

            <Col md={10} lg={6} xl={7} className='d-flex align-items-center order-1 order-lg-1'>
            <img src={require('../../../../assets/adminLogin.png')}
            className="img-fluid" alt="Sample image" />
            </Col>

        </Row>
    </Card.Body>
    </Card>
    </Col>     
    </Row>
    </Container>

    );
  }

  export default AdminLogin