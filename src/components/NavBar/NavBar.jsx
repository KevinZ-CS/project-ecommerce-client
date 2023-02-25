import NavBarCSS from './NavBar.module.css';
import { useState } from "react";
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

    // const [test, setTest] = useState('hi');


    return (
    <>
        <Navbar className={`fixed-top ${NavBarCSS.navbar}`}>
            <Container>
                <span className={`${NavBarCSS.navbrand} text-uppercase fw-lighter ms-2`}>WebStore</span>

            </Container>
         
        </Navbar>


    </>
    )
}

export default NavBar