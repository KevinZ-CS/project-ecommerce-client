import DeleteReviewConfirmationCSS from "./DeleteReviewConfirmation.module.css";
import { Container, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



function DeleteReviewConfirmation() {

const navigate = useNavigate()

return (
       
    <Container className={`${DeleteReviewConfirmationCSS.margins} text-center`}>   

    <Card className="shadow py-5 rounded-0">  
    <FontAwesomeIcon icon={faCheckCircle} className={`${DeleteReviewConfirmationCSS.checkFont} mb-3`} />
    <h2>Success!</h2>
    <p className="text-muted">The review was successfully deleted.</p>
    <div>
    <Button className={`${DeleteReviewConfirmationCSS.button} btn-dark`} onClick={() => navigate('/')}>Home</Button>
    </div>
    </Card>

    </Container> )
}

export default DeleteReviewConfirmation;