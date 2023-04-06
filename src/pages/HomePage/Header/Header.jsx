import HeaderCSS from './Header.module.css';
import { Carousel } from 'react-bootstrap';


function Header() {
return (
    <Carousel className={`vh-100 ${HeaderCSS.header}`}>
        <Carousel.Item className={`text-center ${HeaderCSS.carouselItem}`}>
        <div className={` ${HeaderCSS.fontSize}`}>
            <h2 className="text-capitalize text-white">best collection</h2>
            <h1 className = {` ${HeaderCSS.header1} text-uppercase py-2 fw-bold text-white` }>new arrivals</h1>
            <a href = "/shop" className = {` ${HeaderCSS.button} btn mt-3 text-uppercase rounded-0`}>shop now</a>
        </div>
        </Carousel.Item>

        <Carousel.Item className = {`text-center ${HeaderCSS.carouselItem}`}>
            <h2 className = "text-capitalize text-white">best prices & offers</h2>
            <h1 className = { ` ${HeaderCSS.header1} ${HeaderCSS.fontSize} text-uppercase py-2 fw-bold text-white `}>new season</h1>
            <a href = "/shop" className = {`${HeaderCSS.button} btn mt-3 text-uppercase rounded-0`}>buy now</a> 
        </Carousel.Item>
    </Carousel> )
}

export default Header