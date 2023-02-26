import NavBarCSS from './NavBar.module.css';
import './custom.css';
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function NavBar() {

    const [loginStatus, setLoginStatus] = useState(false);


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
                      
                        <NavDropdown title={<span className='text-uppercase text-dark text-center'>Shop</span>} id="basic-nav-dropdown" >
                    
                        </NavDropdown>

                        <Nav.Link className='text-uppercase text-dark' href="/#collection">Collection</Nav.Link>
                        <Nav.Link className='text-uppercase text-dark' href="/#blogs">Blogs</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>

            </Container>

  

            {/* <div>

                <button type='button' className={`border-0 ${NavBarCSS.btn}`}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>

                <button type='button' className={`border-0 ${NavBarCSS.btn}`}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </button>

                <button type='button' className={`border-0 ${NavBarCSS.btn}`}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                

        
            </div> */}
         
        </Navbar>


    </>
    )
}

export default NavBar