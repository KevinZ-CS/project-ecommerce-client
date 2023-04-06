import PageNotFoundCSS from "./PageNotFound.module.css";
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function PageNotFound() {

return (
       
<Container className={`${PageNotFoundCSS.margins} text-center`}>
<FontAwesomeIcon icon={faExclamationCircle} className={`${PageNotFoundCSS.exFont} mb-3`} />
<h1>404: Not Found</h1>
<p>You are requesting a page that does not exist!</p>
</Container> 
     )
}

export default PageNotFound;