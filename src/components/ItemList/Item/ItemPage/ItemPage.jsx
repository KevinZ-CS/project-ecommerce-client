import ItemPageCSS from './ItemPage.module.css';
import './ItemPageCustom.css';
import { useEffect, useState, useRef } from "react";
import { Container, Row, Dropdown, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from "react-router-dom";
import ReviewCard from './ReviewCard/ReviewCard';
import { useSelector, useDispatch } from "react-redux";
import { fetchItem } from "../../../itemsSlice";
import { addOrderToList, updateOrderList } from '../../../ordersSlice'
import { showCart } from '../../../modalsSlice';
import Pagination from './Pagination/Pagination';

function ItemPage() {

const scrollToRef = useRef();
const { item_id } = useParams();
const navigate = useNavigate()

const item = useSelector((state) => state.items.item)
const orderList = useSelector((state) => state.orders.orderList)
const error = useSelector((state) => state.items.errors)


const [pickSize, setPickSize] = useState('')
const [currentPage, setCurrentPage] = useState(1);
const [reviewsPerPage, setReviewsPerPage] = useState(5);
  
const indexOfLastReview = currentPage * reviewsPerPage;
const indexOfFirstReview = indexOfLastReview - reviewsPerPage; 

const user = useSelector((state) => state.users.user )
const adminUser = useSelector((state) => state.users.adminUser )

let userId = 0


function pluck(array, key) {
    return array.map(o => o[key]);
  }

const percentage = item.average_rating / 5
const widthPct = `${percentage * 100}%`;
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchItem(item_id));
  }, [dispatch]);

function handleChange(e) {
    setPickSize(e.target.value)
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function handleClick() {
    navigate(`/items/${item_id}/reviews`)
}

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    scrollToRef.current.scrollIntoView()
};

function handleAddToCart(e) {
    e.preventDefault();
    submitAddToCart()

    function submitAddToCart () {
        if(user) {
            userId = user.id
        }

        console.log(userId)

        fetch("/api/addToCart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                id: item.id,
                quantity: 1,
                size: pickSize,
                user_id: userId
            })
        })
        .then((response) => {
            if(response.ok) {
                response.json().then((item) => {
                    if(pluck(orderList, 'id').includes(item.id)) {
                    dispatch(updateOrderList(item))
                    dispatch(showCart(true)) }
            
                    else {
                    dispatch((addOrderToList(item)))
                    dispatch(showCart(true)) }
                 
                });
            } else {
                response.json().then((errorData) => console.log(errorData.errors));
            }
        })
    } }

return ( 
    isEmpty(item)&&!error ? null : error ?  
    <Container className={`${ItemPageCSS.margins} text-center`}><h1>{error.error} </h1></Container> : 
    <Container className={`${ItemPageCSS.marginBottom} py-5 px-5 mt-4 text-center`} >

    <Row>    
    <Col lg={6} md={6} sm={12} className={`${ItemPageCSS.test}  test3 `} >
    <img src={item.featured_image.url} alt = "" className=" ms-lg-5 ms-md-0 ms-sm-0  "/>
    </Col>

    <Col  lg={6} md={6} sm={12} className={`${ItemPageCSS.test}`}>
    
    <div className = "  text-md-start">

    <div className = "pb-3">
    <h2 className = "position-relative d-inline-block">{item.name}</h2>
    <br />
    <div className={ItemPageCSS.starRating} >
        <span className={ItemPageCSS.foreground} style={{ width: widthPct }}>
            {[...Array(5)].map((star, i) => {
                return ( <FontAwesomeIcon key={i} icon={faStar} /> )
                })}
            </span>
            <span className={ItemPageCSS.background}>
            {[...Array(5)].map((star, i) => {
                return ( <FontAwesomeIcon key={i} icon={faStar} /> )
                })}
        </span>
    </div>
    <br />
    <div className = "fw-bold mt-2">${item.price}</div>
    </div>

    <div>
    <p className={ItemPageCSS.fontSize}> <span className="fw-bold">Description: </span>{item.description}</p>
    </div>

    <Container className="sizeButton px-0">
    <Dropdown>
    <Dropdown.Toggle as='button' className={`${ItemPageCSS.sizeToggle} btn text-md-start`} >
        {pickSize ? pickSize : 'Select Size'}
    </Dropdown.Toggle>

    <Dropdown.Menu onToggle={handleChange} >
        <Dropdown.Item as='button' value='S' onClick={handleChange} className={`${ItemPageCSS.dropdownItemBg}`}> S</Dropdown.Item>
        <Dropdown.Item as='button' value='M' onClick={handleChange} className={`${ItemPageCSS.dropdownItemBg}`}> M</Dropdown.Item>
        <Dropdown.Item as='button' value='L' onClick={handleChange} className={`${ItemPageCSS.dropdownItemBg}`}> L</Dropdown.Item>
    </Dropdown.Menu>

    </Dropdown>
    </Container> 
    
    {pickSize&&!adminUser ?  <>
    <div className={`${ItemPageCSS.disclosure} py-2`}>This is a demo store for testing purposes — no orders shall be fulfilled.</div>
    <Button className={`${ItemPageCSS.addCartBtn}`} onClick={handleAddToCart}>Add to Cart</Button> </>   : null}
    </div>
    </Col>
    </Row>
        
    <hr className='mt-5'/>

    <Container>
    <h2 ref={scrollToRef}>Customer Reviews</h2>
    <Container className={`${ItemPageCSS.reviewSummary}`}>
        { item.reviews.length > 0 ? <>
    <div className={`${ItemPageCSS.rating}`}>{parseFloat(item.average_rating).toFixed(1)}</div>
    <div className={ItemPageCSS.starRatingSummary} >
        <span className={ItemPageCSS.foreground} style={{ width: widthPct }}>
            {[...Array(5)].map((star, i) => {
                return ( <FontAwesomeIcon key={i} icon={faStar} /> )
                })}
            </span>
            <span className={ItemPageCSS.background}>
            {[...Array(5)].map((star, i) => {
                return ( <FontAwesomeIcon key={i} icon={faStar} /> )
                })}
        </span>
    </div>

    <div className={`${ItemPageCSS.review} px-1`}>{`${item.reviews.length} Reviews`}</div>
    </> : <h3 className='mt-5 text-muted'>No Reviews Yet</h3> }
    { user ? <Button className='mt-1 rounded-0' variant="dark" onClick={handleClick}>Write a Review</Button> : null }
    </Container>
    {item.reviews.length > 0 ? 
    item.reviews.slice(indexOfFirstReview, indexOfLastReview).map((review) => <ReviewCard key={review.id} review={review} /> ) : null}
    </Container>

    <Container className='text-center mt-4'>
    <Pagination  reviewsPerPage={reviewsPerPage} totalReviews={item.reviews.length} paginate={paginate} />  
    </Container>         
    </Container> )
}

export default ItemPage