import LoginFormCSS from './LoginForm.module.css';
import { useState, useEffect, useRef } from "react";
import { Modal, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function LoginForm({ showLogin, setShowLogin }) {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // const [success, setSuccess] = useState(false);

    const handleClose = () => {
        setShowLogin(false);
        setEmail('');
        setPwd('');

    }
    const errRef = useRef();
    //check what this does


    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])
    //this will clear error message anytime the user updates the 2 states because it means that they're fixing for the error

    return (
        
    <>
        <Modal show={showLogin} onHide={handleClose} className='modal-sm mt-3'>
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className='ms-auto' >Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                         <Form.Control
                            type="email"
                            placeholder="Email"
                            autoFocus
                            className={`${LoginFormCSS.loginInput}`}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-0" controlId="exampleForm.ControlInput2">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className={`${LoginFormCSS.loginInput}`}
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </Form.Group>

                <div className="text-center mb-4 mt-4">
                    <a className={LoginFormCSS.forgotPw} href="#">Forgot Password?</a>
                </div>
                
                <hr className="mt-0" />

                <p className={`${LoginFormCSS.terms} text-center text-muted mb-3`}>
                I agree to the Kévin Terms and the Website Terms of Use. For more information about our privacy policy, see our Privacy Policy.
                </p>
                

                <div className="text-center mb-3">
                    <button className={`${LoginFormCSS.button}`} type="submit" >Sign In</button>
                </div>

                <div className={`${LoginFormCSS.createAcc} text-center mb-3 mx-auto`}>
                <span>New to Kévin? </span>
                <NavLink to='/signup' className={LoginFormCSS.noStyle} onClick={handleClose}>Create Account</NavLink>
                </div>

                </Form>

            </Modal.Body>
         
        </Modal>

    </>
    );
  }

  export default LoginForm