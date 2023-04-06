import NavBarCSS from './NavBar.module.css';
import './NavCustom.css';
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import SearchBar from './NavItems/SearchBar/SearchBar';
import LoginForm from './NavItems/Login/LoginForm';
import ShoppingCart from './NavItems/ShoppingCart/ShoppingCart';
import UserAcc from './NavItems/Login/UserAccModal/UserAcc';
import AdminAcc from '../../pages/AdminPages/AdminAccModal/AdminAccModal';
import { showSearch, showLogin, showCart, showUserAcc, showAdminUserAcc } from '../modalsSlice';
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
    
const [lightBox, setLightBox] = useState('');
const dispatch = useDispatch();
const adminUser = useSelector((state) => state.users.adminUser)
const user = useSelector((state) => state.users.user )
const orderList = useSelector((state) => state.orders.orderList)
 
const showLightBox = e => {
    setLightBox('lightbox');
}
const hideLightBox = e => {
    setLightBox('');
};

function handleClick(e) {
window.location.href = '/shop'
e.preventDefault()
}

function handleAccClick() {
if (adminUser) {
dispatch(showAdminUserAcc(true))}
else if(user) {
    dispatch(showUserAcc(true))
}
else { return null }
}

return (
    <>
    <Navbar className={`fixed-top ${NavBarCSS.navbar} bg-white` } expand='sm'>
    <Container>
        <NavLink to='/' className={`  ${NavBarCSS.navbrand}  d-flex`}>
        <Navbar.Brand className={`text-uppercase fw-lighter ms-1  me-0 `}>Démo</Navbar.Brand>
        </NavLink>

        <div className='order-sm-2 me-4'>

        <button type='button' className={`border-0 ${NavBarCSS.button} ${NavBarCSS.searchIcon}`} onClick={() => dispatch(showSearch(true))}>
            <FontAwesomeIcon icon={faSearch} className='d-none d-md-block ' />
        </button>


        <button type='button' className={`border-0 ${NavBarCSS.button} px-2`}>
        {adminUser || user ? <div className='' onClick={handleAccClick}><FontAwesomeIcon icon={faUserCircle} /></div>
                : <div className='' onClick={() => dispatch(showLogin(true))}>Login</div> }
        </button>

        <button type='button' className={`border-0  ${NavBarCSS.button}`} onClick={() => dispatch(showCart(true))}>
            <FontAwesomeIcon icon={faBagShopping} />
            {orderList&&orderList.length > 0 && !adminUser ? <span  className = {`${NavBarCSS.cartBadge} translate-middle badge`} >
            {orderList.reduce((accumulator, currentvalue) => accumulator + parseInt(currentvalue.quantity), 0)}</span> : null}  
        </button>

        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav" className={`border-0 shadow-none ${NavBarCSS.burgerIcon} `} />
        <Navbar.Collapse id="responsive-navbar-nav " >

        <Nav className="mx-auto nav text-center ">
                      
        <NavDropdown title={<span className='text-uppercase text-dark text-center'>Shop</span>} renderMenuOnMount={true} 
        onMouseEnter={showLightBox} onMouseLeave={hideLightBox} id="basic-nav-dropdown" onToggle={() => {handleClick()}}
        className='dropdown-mega position-static'>
        <Row>

        <Col className="col-lg-2"></Col>

        <Col className="col-lg-2">
            <div className={`${NavBarCSS.subHeader}`}>Featured</div>
            <div className={`list-group ${NavBarCSS['body-items']}`}>
            <NavLink to='/shop/new' text="New Arrivals"  className={`${NavBarCSS.navLink} pt-1`}>New Arrivals</NavLink>
            <NavLink to='/shop/sale' text="Sale" className={`${NavBarCSS.navLink} pt-1`}>Sale</NavLink>
            </div>
        </Col>

        <Col className="col-lg-2">
            <div className={`${NavBarCSS.subHeader}`}>Tops</div>
            <div className={`list-group ${NavBarCSS['body-items']}`}>
            <NavLink to='/shop/tshirts' text="T-Shirts" className={`${NavBarCSS.navLink} pt-1`}>T-Shirts</NavLink>
            <NavLink to='/shop/polos' text="Polos" className={`${NavBarCSS.navLink} pt-1`}>Polos</NavLink>
            <NavLink to='/shop/sweaters' text="Sweaters" className={`${NavBarCSS.navLink} pt-1`}>Sweaters</NavLink>
            </div>
        </Col>

        <Col className="col-lg-2">
            <div className={`${NavBarCSS.subHeader}`}>Bottoms</div>
            <div className={`list-group ${NavBarCSS['body-items']}`}>
            <NavLink to='/shop/joggers' text="Joggers" className={`${NavBarCSS.navLink} pt-1`}>Joggers</NavLink>
            <NavLink to='/shop/jeans' text="Jeans"  className={`${NavBarCSS.navLink} pt-1`}>Jeans</NavLink>
            <NavLink to='/shop/chinos' text="Chinos"  className={`${NavBarCSS.navLink} pt-1`}>Chinos</NavLink>
            </div>
        </Col>

        <Col className="col-lg-2">
            <div className={`${NavBarCSS.subHeader}`}>Accessories</div>
            <div className={`list-group ${NavBarCSS['body-items']}`}>
            <NavLink to='/shop/hats' text="Hats"  className={`${NavBarCSS.navLink} pt-1`}>Hats</NavLink>
            <NavLink to='/shop/shades' text="Shades" className={`${NavBarCSS.navLink} pt-1`}>Shades</NavLink>
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
    <SearchBar />
    <LoginForm />
    <ShoppingCart />
    <UserAcc />
    <AdminAcc />
    </> )
}

export default NavBar