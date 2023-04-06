import AccountConfirmationCSS from "./AccountConfirmation.module.css";
import { Container, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { showLogin } from '../../../components/modalsSlice'
import { useDispatch } from "react-redux";



function AccountConfirmation() {

const dispatch = useDispatch()

return (       
    <Container className={`${AccountConfirmationCSS.margins} text-center`}>
 
    <Card className="shadow py-5 rounded-0">
    <FontAwesomeIcon icon={faCheckCircle} className={`${AccountConfirmationCSS.checkFont} mb-3`} />
    <h3>Your account has been successfully created.</h3>
    <div className="mt-3">
    <Button className={`${AccountConfirmationCSS.button} btn-dark`} onClick={() => dispatch(showLogin(true))}>Login</Button>
    </div>
    </Card>

    </Container> 
     )
}

export default AccountConfirmation;