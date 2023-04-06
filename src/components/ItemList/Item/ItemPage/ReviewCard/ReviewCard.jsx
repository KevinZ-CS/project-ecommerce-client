import ReviewCardCSS from './ReviewCard.module.css';
import { Card } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function ReviewCard({ review }) {

const percentage = review.rating/5
const widthPct = `${percentage * 100}%`;

const adminUser = useSelector((state) => state.users.adminUser)
const navigate = useNavigate()

function handleDeleteReview() {
    fetch(`/api/reviews/${review.id}`, { method: "DELETE" }).then((r) => {
        if (r.ok) {
        navigate('/reviewDeleted')
        }
    });
    }

return (

<Card className={`flex-row flex-wrap rounded-0 px-4 mt-4 position-relative ${ReviewCardCSS.card}`}>
    
    {adminUser ? 
    <button type="button" className={`${ReviewCardCSS.closeButton} border-0 bg-white `} aria-label="Close" onClick={handleDeleteReview}>Delete</button> : null}
    
    <Card.Header className={`${ReviewCardCSS.cardHeader} bg-white border-0 mt-2`} >
        <span className={ReviewCardCSS.cardUser}>
        <FontAwesomeIcon className="text-dark" icon={faUserCircle}/>
        <span className='px-1'>{review.username}</span>
        </span>

        < br/>
        <span className={ReviewCardCSS.starIcon}>

        <div className={ReviewCardCSS.starRating} >
        <span className={ReviewCardCSS.foreground} style={{ width: widthPct }}>
            {[...Array(5)].map((star, i) => {
            return ( <FontAwesomeIcon key={i} icon={faStar} /> )
            })}
        </span>

        <span className={ReviewCardCSS.background}>
            {[...Array(5)].map((star, i) => {
            return ( <FontAwesomeIcon key={i} icon={faStar} /> )
            })}
        </span>
        </div>

        </span>
    </Card.Header>

    <Card.Body className={`${ReviewCardCSS.cardBody} text-md-start col-12`} >
    <br />
    <Card.Text>
    {review.comment}
    </Card.Text>
    </Card.Body>

</Card> )
}

export default ReviewCard