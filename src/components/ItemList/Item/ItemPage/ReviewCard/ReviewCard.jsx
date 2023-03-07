import ReviewCardCSS from './ReviewCard.module.css';
import { useState } from "react";
import { Card } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

function ReviewCard() {

    return (

    <Card className={`flex-row flex-wrap rounded-0 px-4 mt-4  ${ReviewCardCSS.card}`}>
        <Card.Header className={`${ReviewCardCSS.cardHeader} bg-white border-0 mt-2`} >
            <span className={ReviewCardCSS.cardUser}>
            <FontAwesomeIcon className="text-dark" icon={faUserCircle}/>
            <span className='px-1'>Kevin</span>
            </span>

            < br/>
            <span className={ReviewCardCSS.starIcon}>
            <FontAwesomeIcon className="text-dark" icon={faStar}/>
            <FontAwesomeIcon className="text-dark" icon={faStar}/>
            <FontAwesomeIcon className="text-dark " icon={faStar}/>
            <FontAwesomeIcon className="text-dark " icon={faStar}/>
            <FontAwesomeIcon className="text-dark" icon={faStar}/>
            </span>

        </Card.Header>
 
        <Card.Body className={`${ReviewCardCSS.cardBody} text-md-start`} >
        <br />
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.

            </Card.Text>

        </Card.Body>

        {/* <Card.Footer>4 days ago</Card.Footer> */}
    </Card>    
    )
}

export default ReviewCard