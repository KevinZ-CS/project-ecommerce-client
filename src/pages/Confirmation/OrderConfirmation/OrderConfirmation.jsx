import OrderConfirmationCSS from "./OrderConfirmation.module.css";
import { Container, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



function OrderConfirmation() {

const navigate = useNavigate()

return (
       
    <Container className={`${OrderConfirmationCSS.margins} text-center`}>

    <Card className="shadow py-5 rounded-0">
    <FontAwesomeIcon icon={faCheckCircle} className={`${OrderConfirmationCSS.checkFont} mb-3`} />
    <h2>Your order is complete!</h2>
    <p className="text-muted">You will be receiving a confirmation email with order details.</p>
    <div>
    <Button className={`${OrderConfirmationCSS.button} btn-dark`} onClick={() => navigate('/')}>Home</Button>
    </div>
    </Card>

    </Container> )
}

export default OrderConfirmation;