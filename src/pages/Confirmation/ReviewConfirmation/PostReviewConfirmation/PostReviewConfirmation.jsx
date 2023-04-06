import PostReviewConfirmationCSS from "./PostReviewConfirmation.module.css";
import { Container, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



function PostReviewConfirmation() {

const navigate = useNavigate()

return (
    
    <Container className={`${PostReviewConfirmationCSS.margins} text-center`}>
      
    <Card className="shadow py-5 rounded-0">
    <FontAwesomeIcon icon={faCheckCircle} className={`${PostReviewConfirmationCSS.checkFont} mb-3`} />
    <h2>Success!</h2>
    <p className="text-muted">Your review was successfully posted. We appreciate your feedback!</p>
    <div>
    <Button className={`${PostReviewConfirmationCSS.button} btn-dark`} onClick={() => navigate('/')}>Home</Button>
    </div>
    </Card>

    </Container> )
}

export default PostReviewConfirmation;