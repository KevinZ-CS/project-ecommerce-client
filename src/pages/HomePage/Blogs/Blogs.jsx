import BlogsCSS from './Blogs.module.css';
import { Card, Container, Row } from 'react-bootstrap';

function Blogs() {

return(
    <Container id='blogs' className="pt-0 py-5">
        <div className = "text-center py-5">
        <h2 className = {` ${BlogsCSS.title} position-relative d-inline-block `}>Our Style Blog</h2>
        </div>

    <Row className="g-3">
    <Card className = "border-0 col-md-6 col-lg-4 bg-transparent my-3">
        <img src ={require('../../../assets/blog3.jpg')} alt = ""/>
        <div className = "card-body px-0">
        <h4 className = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
        <p className = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
        <p className = "card-text">
        <small className = "text-muted">
            <span className = "fw-bold">Author: </span>John Smith
        </small>
        </p>
        </div>
    </Card>

    <Card className = "border-0 col-md-6 col-lg-4 bg-transparent my-3 blog1">
        <img src ={require('../../../assets/blog1.jpg')} alt = ""/>
        <div className = "card-body px-0">
        <h4 className = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
        <p className = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
        <p className = "card-text">
        <small className = "text-muted">
            <span className = "fw-bold">Author: </span>John Smith
        </small>
        </p>
        </div>
    </Card>

    <Card className = "border-0 col-md-6 col-lg-4 bg-transparent my-3">
        <img src ={require('../../../assets/blog2.jpg')} alt = ""/>
        <div className = "card-body px-0">
        <h4 className = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
        <p className = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
        <p className = "card-text">
        <small className = "text-muted">
            <span className = "fw-bold">Author: </span>John Smith
        </small>
        </p>
        </div>
    </Card>
    </Row>

    </Container> )
}

export default Blogs