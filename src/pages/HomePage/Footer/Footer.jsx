import FooterCSS from './Footer.module.css';
import { Container, Row } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMapMarkedAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Footer() {

const [email, setEmail] = useState('')
const [showMsg, setShowMsg] = useState(false)

function handleSubmit(e) {
    e.preventDefault()
    setEmail('')
    setShowMsg(true)
}

return(

    <footer className={`${FooterCSS.footerBg} py-5`}>

        <Container>
            <Row className="text-white g-4">

            <div className = "col-md-6 col-lg-3">
                <h5 className = "fw-light">Links</h5>
                <ul className = "list-unstyled">
                    <li className = "my-3 test">
                        <a href = "#" className = "text-white text-decoration-none text-muted test2">
                            <FontAwesomeIcon icon={faChevronRight} className="me-1" /> Home
                        </a>
                    </li>
                    <li className = "my-3">
                        <a href = "#" className = "text-white text-decoration-none text-muted">
                            <FontAwesomeIcon icon={faChevronRight} className="me-1" /> Collection
                        </a>
                    </li>
                    <li className = "my-3">
                        <a href = "#" className = "text-white text-decoration-none text-muted">
                            <FontAwesomeIcon icon={faChevronRight} className="me-1" /> Blogs
                        </a>
                    </li>
                    <li className = "my-3">
                        <a href = "privacyPolicy" className = "text-white text-decoration-none text-muted">
                            <FontAwesomeIcon icon={faChevronRight} className="me-1" /> Privacy Policy
                        </a>
                    </li>
                    <li className = "my-3">
                        <a href = "termsOfUse" className = "text-white text-decoration-none text-muted">
                            <FontAwesomeIcon icon={faChevronRight} className="me-1" /> Terms of Use
                        </a>
                    </li>
                    
                </ul>
            </div>


            <div className = "col-md-6 col-lg-3">
                <h5 className = "fw-light mb-3">Contact Us</h5>
                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className = "me-3">
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </span>
                    <span className = "fw-light">
                        11 Broadway 2nd floor, New York, NY 10004
                    </span>
                </div>
                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className = "me-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className = "fw-light">
                        kévin.support@gmail.com
                    </span>
                </div>
                <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className = "me-3">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <span className = "fw-light">
                        1-800-456 -7891
                    </span>
                </div>
            </div>


            <div className = "col-md-6 col-lg-3">
                <h5 className = "fw-light mb-3">Follow Us</h5>
                <div>
                    <ul className = "list-unstyled d-flex">
                        <li>
                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className = "col-md-6 col-lg-3" id="newsletter">          
            <h5 className="fw-light mb-3 ">Stay In Touch</h5>
        
                <form onSubmit={handleSubmit} className='input-group col-md-3'>
                <input 
                type="text" 
                className={`form-control rounded-0 ${FooterCSS.footerInput}`} 
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <button className={`btn btn-dark btn-sm col-md-3  col-sm-2 rounded-0 ${FooterCSS.button}`} type="submit">
                <FontAwesomeIcon icon={faChevronRight} className="me-1" />
                </button>
                </form>
            { showMsg ? <div className={`${FooterCSS.confirmMsg} mt-3`}>
                <p>Thanks for subscribing!</p>
                </div> : null }
            </div> 
        

            </Row>
        </Container>

    </footer> )
}

export default Footer