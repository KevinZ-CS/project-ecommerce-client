import SignUpFormCSS from './SignUpForm.module.css';
import { useState, useEffect, useRef } from "react";
import { Form, Container, Row, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function SignUpForm({ setLogin, loginStatus }) {

    const FN_REGEX = /^[A-z]{3,23}$/;
    const LN_REGEX = /^[A-z]{3,23}$/;
    const EMAIL_REGEX =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    //USER says that it must start with lower or uppercase letter
    //after that it must be followed by anywhere from 3 up to 23 characters that can be lower or uppercase letters and digits hypthens or underscores
    //so overall it must be 4 - 24 characters
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    //pw regex requires at least 1 lower case letter 1 uppercase letter 1 digit and 1 special character and in total can be from 8 to 24 characters

    // const userRef = useRef();
    //sets focus on the user input when the component loads
    const errRef = useRef();
    // if we get an error we need to put a focus on that so that it can be annoucned by a screen reader for accessibility

    const [firstName, setFirstName] = useState('');
    const [validFN, setValidFN] = useState(false);
    const [FNFocus, setFNFocus] = useState(false);
    // the focus just means whether we have focus on that input or not

    

    const [lastName, setLastName] = useState('');
    const [validLN, setValidLN] = useState(false);
    const [LNFocus, setLNFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

  

    // const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
     
    //on load set focus on username input
    useEffect(() => {
        setValidFN(FN_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLN(LN_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    //within the parathesis will return a boolean value where we're testing the value against the regex to see if its valid or not
    }, [email])
   // this will be called everytime the user is updated so  it will test the validation again for the new value



    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    //     within the parathesis will return a boolean value where we're testing the value against the regex to see if its valid or not
    // }, [user])
    // this will be called everytime the user is updated so  it will test the validation again for the new value

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    // have both pwd and matchPwd within the same useEffect is that any time one of them changes the valid match will also check

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, pwd, matchPwd])

    //anytime one of these state changes we're going to clear the error message because the user is making the changes to adjust for the error

    const handleSubmit = (e) => {
        e.preventDefault();
   
        // if button enabled with JS hack
        // this validates the form again to make sure that somebody isn't just grabbing the button and enabling it
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        //below should be fetching the api

        fetch("http://localhost:3000/accounts")
        .then((r) => r.json())
        .then((acc) => {

        if(acc.some((item) => item.email === email)) {
            setErrMsg('An account with this email already exists.')
        } else {
            fetch('http://localhost:3000/accounts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstname: firstName,
                  lastname: lastName,
                  email: email,
                  password: pwd
                })
              })
                .then((r) => r.json())
                .then((data) => {
                    setSuccess(true)

                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPwd('');
                    setMatchPwd('');
                })
              }
         
    })



    }
   
    return (
        <>
               {success ? (
                <Container className={`${SignUpFormCSS.successMargins} text-center`}>

                    <h1>Success!</h1>
                    <p className="text-muted">Your account has been created.</p>
                    <FontAwesomeIcon icon={faCheckCircle} className={`${SignUpFormCSS.checkFont}`} />
                    <br />
                    {loginStatus ? null :
                    <button className={`${SignUpFormCSS.signIn} mt-5`} onClick={() => setLogin(true)}>Sign In</button>
                     }
            
                </Container>
            ) : (

            <Container className="pt-4 pb-4 col-lg-7">
                {/* <p>{errMsg}</p> */}
                <Row>
                    <div className="col-md-3"></div>
                <Form className="mt-5 border p-4 bg-light shadow col-md-6" onSubmit={handleSubmit}>
                    <div className={` ${SignUpFormCSS.formTitle} mb-5 text-center mb-0`} >Sign Up</div>
                    <Row>

                    
                    <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
                    <label>First Name
                        <span className="text-danger">*</span>
                        {/* <span><FontAwesomeIcon icon={faCheck} className={validFN ? "valid" : "hide"} /></span>
                        <span><FontAwesomeIcon icon={faTimes} className={validFN || !firstName ? "hide" : "invalid"} /></span> */}
                                {/* for the red x we want to show it if the input does exist or if its invalid */}
                    
                    </label>
                    <InputGroup>
                         <Form.Control
                            type="text"
                            autoFocus
                            autoComplete="off"
                            className= {`${SignUpFormCSS.rightBorder} rounded-0 shadow-none`}
                            name="fname"
                            onChange={(e) => setFirstName(e.target.value) }
                            required
                            onFocus={() => setFNFocus(true)}
                            onBlur={() => setFNFocus(false)}
                      
                         
                            // className={FNFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}
                        />
                         <InputGroup.Text className={FNFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}  >
                         <span><FontAwesomeIcon icon={faCheck} className={validFN ? `${SignUpFormCSS.valid}` : `${SignUpFormCSS.hide}`} /></span>
                         <span><FontAwesomeIcon icon={faTimes} className={validFN || !firstName ? `${SignUpFormCSS.hide}` : `${SignUpFormCSS.invalid}`} /></span>
                         </InputGroup.Text>

                   

                        </InputGroup>

               

                       

                    </Form.Group>

                        <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput2">
                        <label>Last Name
                            <span className="text-danger">*</span>
                            {/* <FontAwesomeIcon icon={faCheck} className={validLN ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validLN || !lastName ? "hide" : "invalid"} /> */}
        
                        </label>

                        <InputGroup>
                         <Form.Control
                            type="text"
                            autoComplete="off"
                            className={`${SignUpFormCSS.rightBorder} rounded-0 shadow-none`}
                            name="lname"
                            onChange={(e) => setLastName(e.target.value) }
                            required
                            onFocus={() => setLNFocus(true)}
                            onBlur={() => setLNFocus(false)}
                        />

                        <InputGroup.Text className={LNFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}  >
                         <span><FontAwesomeIcon icon={faCheck} className={validLN ? `${SignUpFormCSS.valid}` : `${SignUpFormCSS.hide}`} /></span>
                         <span><FontAwesomeIcon icon={faTimes} className={validLN || !lastName ? `${SignUpFormCSS.hide}` : `${SignUpFormCSS.invalid}`} /></span>
                         </InputGroup.Text>

                         </InputGroup>

                        
                        </Form.Group>


                        <Form.Group className="mb-3 col-md-12" controlId="exampleForm.ControlInput3">
                        <p ref={errRef} className={errMsg ? `${SignUpFormCSS.errMsg}` : `${SignUpFormCSS.offScreen}`} aria-live="assertive">{errMsg}</p>
                        <label>Email
                            <span className="text-danger">*</span>
                            {/* <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} /> */}
                        </label>
                        <InputGroup>
                         <Form.Control
                            placeholder="email@example.com"
                            type="email"
                            autoComplete="off"
                            className={`${SignUpFormCSS.rightBorder} rounded-0 shadow-none`}
                            name="email"
                            onChange={(e) => setEmail(e.target.value) }
                            required
                            aria-invalid={validEmail ? 'false' : 'true'}
                            // will be initially set to true since we will not have a valid name on initial load
                            // this lets the screen reader announce whether these input field needs adjustment or not
                            aria-describedby="uidnote"
                            //this allows us to provide another element that describes the screen input field
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            //this is when you leave the input field
                        />

                        <InputGroup.Text className={emailFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}  >
                         <span><FontAwesomeIcon icon={faCheck} className={validEmail ? `${SignUpFormCSS.valid}` : `${SignUpFormCSS.hide}`} /></span>
                         <span><FontAwesomeIcon icon={faTimes} className={validEmail || !email ? `${SignUpFormCSS.hide}` : `${SignUpFormCSS.invalid}`} /></span>
                         </InputGroup.Text>


                        </InputGroup>
                            <p id="uidnote" className={emailFocus && email && !validEmail ? `${SignUpFormCSS.instructions}` : `${SignUpFormCSS.offScreen}`}>
                                {/* here we're saying if emailFocus is true and email state exists and if email is invalid display instructions*/}
                                {/* instructions are set to off screen css instead of display none because we still want instructions to be available to screen readers */}
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <span className={`${SignUpFormCSS.firstLine}`}>Enter valid email.</span>
                            </p>

                            
                           
                        </Form.Group>
                    

                        <Form.Group className="mb-3 col-md-12" controlId="exampleForm.ControlInput4">
                        <label>Password
                            <span className="text-danger">*</span>
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>

                        <InputGroup>
                         <Form.Control
                            type="password"
                            className={`${SignUpFormCSS.rightBorder} rounded-0 shadow-none`}
                            name="password"
                            onChange={(e) => setPwd(e.target.value) }
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />

                        <InputGroup.Text className={pwdFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}  >
                         <span> <FontAwesomeIcon icon={faCheck} className={validPwd ? `${SignUpFormCSS.valid}` : `${SignUpFormCSS.hide}`} /></span>
                         <span><FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? `${SignUpFormCSS.hide}` : `${SignUpFormCSS.invalid}`} /></span>
                         </InputGroup.Text>


                        </InputGroup>
                         <p id="pwdnote" className={pwdFocus && !validPwd ? `${SignUpFormCSS.instructions}` : `${SignUpFormCSS.offScreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle}  />

                            <span className={`${SignUpFormCSS.firstLine}`}>8 to 24 characters.</span>
                                <br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-12" controlId="exampleForm.ControlInput5">
                        <label>Confirm Password
                            <span className="text-danger">*</span>
                            {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} /> */}
                            {/* we need the matchPwd because if we just leave it black it will still be a valid match so it will show green check if its empty*/}
                            {/* <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
                        </label>


                        <InputGroup>
                         <Form.Control
                            type="password"
                            className={`${SignUpFormCSS.rightBorder} rounded-0 shadow-none`}
                            name="confirmpassword"
                            onChange={(e) => setMatchPwd(e.target.value) }
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />

                        <InputGroup.Text className={matchFocus ? `${SignUpFormCSS.blackOnFocus}` : `${SignUpFormCSS.formIcon}`}  >
                         <span> <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? `${SignUpFormCSS.valid}` : `${SignUpFormCSS.hide}`} /></span>
                         <span>  <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? `${SignUpFormCSS.hide}` : `${SignUpFormCSS.invalid}`} /></span>
                         </InputGroup.Text>

                            </InputGroup>

                            <p id="confirmnote" className={matchFocus && !validMatch ? `${SignUpFormCSS.instructions}` : `${SignUpFormCSS.offScreen}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <span className={`${SignUpFormCSS.firstLine}`}>Must match the first password input field.</span>
                        </p>
                        </Form.Group>

                        <div className="col-md-12 text-center">
                           <button onSubmit={handleSubmit} disabled={!validFN || !validLN || !validEmail || !validPwd || !validMatch ? true : false} className={`${SignUpFormCSS.button} btn`} >Create Account</button>
                        </div>

                    </Row>
                </Form>
                </Row>
            </Container>
            )}
        </>
    )

}

export default SignUpForm