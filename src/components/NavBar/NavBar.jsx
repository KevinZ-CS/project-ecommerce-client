import NavBarCSS from './NavBar.module.css';
import './custom.css';
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function NavBar() {

    const [lightBox, setLightBox] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);

    const showLightBox = e => {
        setLightBox('lightbox');
    }
    const hideLightBox = e => {
        setLightBox('');
    };


    return (
    <>
        <Navbar className={`fixed-top ${NavBarCSS.navbar}`}>
            <Container>
                <Navbar.Brand className={`${NavBarCSS.navbrand} text-uppercase fw-lighter ms-2 order-lg-0`}>WebStore</Navbar.Brand>
                

                <div className='order-lg-2'>

                <button type='button' className={`border-0 ${NavBarCSS.button} px-3`}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>

                <button type='button' className={`border-0 ${NavBarCSS.button} px-3`}>

                {loginStatus ? <FontAwesomeIcon icon={faUserCircle} />
                        : <div className='' >Login</div> }

                </button>

                <button type='button' className={`border-0 ${NavBarCSS.button} px-3`}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto order-lg-1 nav">
                      
                        <NavDropdown title={<span className='text-uppercase text-dark text-center'>Shop</span>} renderMenuOnMount={true} 
                        onMouseEnter={showLightBox} onMouseLeave={hideLightBox} id="basic-nav-dropdown" 
                        className='dropdown-mega position-static'>

                        <Row>

                            <Col className="col-lg-2"></Col>

                            <Col className="col-lg-2">
                               <div className={`${NavBarCSS.subHeader}`}>Featured</div>
                               <div className={`list-group ${NavBarCSS['body-items']}`}>

                                <NavLink to='/navItem' text="New Arrivals"  className={`${NavBarCSS.navLink} pt-1`}>New Arrivals</NavLink>
                                <NavLink to='/navItem' text="Sale" className={`${NavBarCSS.navLink} pt-1`}>Sale</NavLink>
                           
                               </div>
                            </Col>


                            <Col className="col-lg-2">
                                <div className={`${NavBarCSS.subHeader}`}>Tops</div>
                                <div className={`list-group ${NavBarCSS['body-items']}`}>
                                <NavLink to='/navItem/T-Shirts' text="T-Shirts" className={`${NavBarCSS.navLink} pt-1`}>T-Shirts</NavLink>
                                <NavLink to='/navItem/Polos' text="Polos" className={`${NavBarCSS.navLink} pt-1`}>Polos</NavLink>
                                <NavLink to='/navItem/Sweaters' text="Sweaters" className={`${NavBarCSS.navLink} pt-1`}>Sweaters</NavLink>
                                </div>
                            </Col>

                            <Col className="col-lg-2">
                                <div className={`${NavBarCSS.subHeader}`}>Bottoms</div>
                                <div className={`list-group ${NavBarCSS['body-items']}`}>
                                <NavLink to='/navItem/Joggers' text="Joggers" className={`${NavBarCSS.navLink} pt-1`}>Joggers</NavLink>
                                <NavLink to='/navItem/Jeans' text="Jeans"  className={`${NavBarCSS.navLink} pt-1`}>Jeans</NavLink>
                                <NavLink to='/navItem/Chinos' text="Chinos"  className={`${NavBarCSS.navLink} pt-1`}>Chinos</NavLink>
                                </div>
                            </Col>

                            <Col className="col-lg-2">
                                <div className={`${NavBarCSS.subHeader}`}>Accessories</div>
                                <div className={`list-group ${NavBarCSS['body-items']}`}>
                                <NavLink to='/navItem/Hats' text="Hats"  className={`${NavBarCSS.navLink} pt-1`}>Hats</NavLink>
                                <NavLink to='/navItem/Shades' text="Shades" className={`${NavBarCSS.navLink} pt-1`}>Shades</NavLink>
                                </div>
                            </Col>

                        </Row>
                    
                        </NavDropdown>

                        <Nav.Link className='text-uppercase text-dark' href="/#collection">Collection</Nav.Link>
                        <Nav.Link className='text-uppercase text-dark' href="/#blogs">Blogs</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>

            </Container>
            <div id={lightBox}></div>
        </Navbar>


    </>
    )
}

export default NavBar