import AdminAccountConfirmationCSS from "./AdminAccountConfirmation.module.css";
import { Container, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function AdminAccountConfirmation() {

const navigate = useNavigate()

return (
       
    <Container className={`${AdminAccountConfirmationCSS.margins} text-center`}>
     
    <Card className="shadow py-5 rounded-0">  
    <FontAwesomeIcon icon={faCheckCircle} className={`${AdminAccountConfirmationCSS.checkFont} mb-3`} />
    <h3>Your account has been successfully created.</h3>
    <div className="mt-3">
    <Button className={`${AdminAccountConfirmationCSS.button} btn-dark`} onClick={() =>navigate('/adminLogin')}>Login</Button>
    </div>
    </Card>

    </Container> )
}

export default AdminAccountConfirmation;