import ItemPageCSS from './ItemPage.module.css';
import './ItemPageCustom.css';
import { useEffect, useState } from "react";
import { Container, Row, Dropdown, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import AddCartButton from './AddCartButton/AddCartButton';



function ItemPage() {


const [pickSize, setPickSize] = useState('')
const [item, setItem] = useState([])


function handleChange(e) {
    setPickSize(e.target.value)
}
// const { id } = useParams();

// useEffect(() => {
//     fetch("http://localhost:3000/clothes")
//     .then((r) => r.json())
//     .then((items) => setItem(items.filter( item => item.id.toString() === id)))

// }, [id])



// const [ newItem ] = item
//dustructure since filter returns a copy of an array





//set Quantity Limit 

    return (
        <Container className='py-5 px-5 mt-4 mb-4 text-center  '>

            {/* <Row className = "align-items-center"> */}
            <Row >
            {/* <div className="col-lg-2">
            </div> */}
            
            <Col lg={6} md={6} sm={12} className={`${ItemPageCSS.test}  test3 `} >
            <img src={require('../top1.png')} alt = "" className="itemPageImage ms-lg-5 ms-md-0 ms-sm-0  "/>
            </Col>
      
          
            <Col  lg={6} md={6} sm={12} className={`${ItemPageCSS.test}`}>
            {/* <img src={require('../top1.png')} alt = "" className="itemPageImage mb-3 "/> */}
         

<div className = "  text-md-start">

    <div className = "pb-3">
        <h2 className = "position-relative d-inline-block">Green Shirt</h2>
        <br />
        <FontAwesomeIcon className="text-dark" icon={faStar}/>
        <FontAwesomeIcon className="text-dark" icon={faStar}/>
        <FontAwesomeIcon className="text-dark" icon={faStar}/>
        <FontAwesomeIcon className="text-dark" icon={faStar}/>
        <FontAwesomeIcon className="text-dark" icon={faStar}/>
        <br />
        <div className = "fw-bold mt-2">$20.00</div>
    </div>


    <div>
    <p className={ItemPageCSS.fontSize}> <span className="fw-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
    </div>

    <Container className="sizeButton px-0">
    <Dropdown>
    <Dropdown.Toggle as='button' className={`${ItemPageCSS.sizeToggle} btn`} >
        {pickSize ? pickSize : 'Select Size'}
    </Dropdown.Toggle>

    <Dropdown.Menu onToggle={handleChange}>
        <Dropdown.Item as='button' value='S' onClick={handleChange} > S</Dropdown.Item>
        <Dropdown.Item as='button' value='M' onClick={handleChange} > M</Dropdown.Item>
        <Dropdown.Item as='button' value='L' onClick={handleChange} > L</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Container> 

    {/* <Button>AddCart</Button>  */}
    </div>

            </Col>

            
         
         
            {/* <div className = "col-lg-4">
                    <img src={require('../top1.png')} alt = "" className="itemPageImage mb-3"/>
            </div>

                <div className = "col-lg-5 text-center text-md-start">
               
                    <div className = "pb-3">
                        <h2 className = "position-relative d-inline-block">Green Shirt</h2>
                        <br />
                        <FontAwesomeIcon className="text-dark" icon={faStar}/>
                        <FontAwesomeIcon className="text-dark" icon={faStar}/>
                        <FontAwesomeIcon className="text-dark" icon={faStar}/>
                        <FontAwesomeIcon className="text-dark" icon={faStar}/>
                        <FontAwesomeIcon className="text-dark" icon={faStar}/>
                        <br />
                        <div className = "fw-bold mt-2">$20.00</div>
                    </div>

               
                    <div>
                    <p> <span className="fw-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
                    </div>

                    <Container className="size-section px-0">
                    <Dropdown>
                    <Dropdown.Toggle as='button' id="selectSize" className="btn btn-size-dropdown" >
                        {pickSize ? pickSize : 'Select Size'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu onToggle={handleChange}>
                        <Dropdown.Item as='button' value='S' onClick={handleChange} > S</Dropdown.Item>
                        <Dropdown.Item as='button' value='M' onClick={handleChange} > M</Dropdown.Item>
                        <Dropdown.Item as='button' value='L' onClick={handleChange} > L</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </Container> */}

                    {/* {pickSize ? <AddCart item={newItem} size={pickSize} cart={cart} setCart={setCart} setShowCanvas={setShowCanvas}/> : null} */}

                    
                {/* </div> */}

            </Row>

       </Container>
       
    )
}

export default ItemPage