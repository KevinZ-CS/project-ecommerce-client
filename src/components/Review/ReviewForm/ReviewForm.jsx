import ReviewFormCSS from './ReviewForm.module.css';
import { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from '../../itemsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewForm() {

const { item_id } = useParams()
const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector((state) => state.users.user)

const [review, setReview] = useState({
    item_id: item_id,
    user_id: user.id,
    rating: null,
    comment: ''
});

const [hover, setHover] = useState(null)
const [errors, setErrors] = useState({})
const { rating, comment, unauthorized } = errors

const itemData = useSelector((state) => state.items.item)
const error = useSelector((state) => state.items.errors)

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

useEffect(() => {
    dispatch(fetchItem(item_id));
    }, [dispatch]);

function handleSubmit(e) {
        e.preventDefault();
        submitReview(review)

        function submitReview (data) {
            fetch(`/api/items/${item_id}/reviews`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if(response.ok) {
                    response.json().then((review) => {
                        setReview({
                            item_id: item_id,
                            user_id: user.id, 
                            rating: null,
                            comment: ''
                        })
                        setHover(null)
                        setErrors({})
                        navigate('/reviewPosted')
                     
                    });
                } else {
                    response.json().then((errorData) => setErrors(errorData.errors));
                }
            })
        } }

return (

    isEmpty(itemData)&&!error ? null : error ?  
    <Container className={`${ReviewFormCSS.margins} text-center`}><h1>{error.error} </h1></Container> : 

    <Container className={`${ReviewFormCSS.container}`}>
    <Row className='justify-content-center'>
    <Col lg={12} xl={11}>
    <Card className='text-black rounded-0 border-0'>
        <Card.Body className='p-md-5'>
        <Row className='justify-content-center'>
        <Col md={10} lg={6} xl={5} >
            <h1 className={`${ReviewFormCSS.titleFontSize} text-center fw-bold mb-4 mt-4`}>Write a Review</h1>
            <Container className="text-center  mb-3">
            <img src={itemData.featured_image.url} alt = ""  />
            </Container>
            <h1 className={`${ReviewFormCSS.nameFontSize} text-center mb-1 mt-2`}>{itemData.name}</h1>

            <Form className='mx-md-4 adminSignUp' onSubmit={handleSubmit} autoComplete='off'>

                <Form.Group className='mb-3 text-center'>
                {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (  
                <label key={ratingValue}>
                <input 
                    type='radio' 
                    name='rating' 
                    className={`${ReviewFormCSS.radio}`} 
                    value={ratingValue} 
                    onClick={() => setReview({...review, rating: ratingValue})} />

                <FontAwesomeIcon 
                    className={`${ReviewFormCSS.star} `} 
                    icon={faStar} 
                    color={ratingValue <= (hover || review.rating) ? '#ffc107' : '#e4e5e9' }  
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)} /> 
                </label>)})}
                {rating ? <Form.Label className={`${ReviewFormCSS.errorMsg} text-danger col-12`}>*{rating}</Form.Label> : null}
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>Review:</Form.Label>
                <Form.Control 
                    className='shadow-none rounded-0 border-dark'
                    as="textarea" rows={3} 
                    name='description'
                    value={review.comment}
                    onChange={(e) => setReview({...review, comment: e.target.value})} />
                
                {comment ? <Form.Label className={`${ReviewFormCSS.errorMsg} text-danger`}>*{comment}</Form.Label> : null}
                {unauthorized ? <Form.Label className={`${ReviewFormCSS.errorMsg} text-danger`}>*{unauthorized}</Form.Label> : null}
                </Form.Group>
    
                <div className='text-center'>
                <button type='submit' className={`${ReviewFormCSS.button}`} >Post</button>
                </div>
    
            </Form>
        </Col>
        </Row>
        </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container> );
  }

  export default ReviewForm