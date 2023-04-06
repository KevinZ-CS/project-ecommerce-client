import CollectionCSS from './Collection.module.css';
import { Container, Row } from 'react-bootstrap';

function Collection() {

return (
    <Container id='collection' className="py-5">
        
        <div className="text-center py-5">
            <h2 className={` ${CollectionCSS.title} position-relative d-inline-block`}>Fall Collection</h2>
        </div>

        <Row className="special-list g-0">
            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 overflow-hidden">
                <div className = {` ${CollectionCSS.image} position-relative `} >
                    <img src = {require('../../../assets/collect1.jpg')} className = "w-100" />
                </div>
            </div>

            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 overflow-hidden">
                <div className = {` ${CollectionCSS.image} position-relative`} >
                    <img src = {require('../../../assets/collect2.jpg')} className = "w-100" />
                </div>
            </div>

            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 overflow-hidden">
                <div className = {` ${CollectionCSS.image} position-relative `} >
                    <img src = {require('../../../assets/collect3.jpg')} className = "w-100" />
                </div>
            </div>

            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 overflow-hidden">
                <div className = {` ${CollectionCSS.image} position-relative`} >
                    <img src = {require('../../../assets/collect4.jpg')} className = "w-100" />
                </div>
            </div>
        </Row>

        <div className="text-center py-5 pb-0">
            <h2 className={` ${CollectionCSS.fontSize} position-relative d-inline-block `}>Coming Soon...</h2>
        </div>

    </Container>
    )
}

export default Collection