import ItemCSS from './Item.module.css';
import { NavLink } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';



function Item() {

function handleClick() {
    console.log('do something')
    // setItemPage(item)
}


    return (
        <Container className = "col-md-6 col-lg-4 col-xl-3">
        <Card style={{ width: '16rem' }} className='m-1 border-0 w-100'>
            <Card.Header className={`${ItemCSS.cardHeader} py-3`} >
                {false ?   <button type="button" className={`${ItemCSS.closeButton} btn-close px-3`}  aria-label="Close" ></button> :
                null }
            </Card.Header>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body >
            <img className='w-100' src={require('./top1.png')} alt=""/>
            <div className = "text-center">
             <NavLink to={'/itempage/'+'1'} className={`${ItemCSS.itemName}`}>
                <p onClick={handleClick} className = "text-capitalize my-1">Green Shirt</p>
             </NavLink>
         
            <div className = "fw-bold">$20.00</div>
             </div>
     
        </Card.Body>
      </Card>
      </Container>    
                        
    )
}

export default Item