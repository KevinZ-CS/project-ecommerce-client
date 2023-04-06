import EditItemFormCSS from './EditItemForm.module.css';
import './EditItemFormCustom.css';
import { useState, useRef, useEffect } from "react";
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateUpdatedAlert, updateItemList } from '../../../components/itemsSlice';

function EditItemForm() {

const navigate = useNavigate()
const dispatch = useDispatch()
const { id } = useParams();
const [itemData, setItemData] = useState(null)

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`/api/items/${id}`);
        const item = await response.json();
        if(response.ok) {
            setItemData({...item, featured_image: null})
        } else {
            console.log(item.error)
        }
}
fetchData()
}, [])

const [errors, setErrors] = useState({})
const { name, size, category, sub_category, quantity, price, description, featured_image } = errors

const inputRef = useRef(null);
const resetFileInput = () => {
    inputRef.current.value = null;
}


function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();

        data.append("name", itemData.name);
        data.append("size", itemData.size);
        data.append("category", itemData.category);
        data.append("sub_category", itemData.sub_category);
        data.append("quantity", itemData.quantity);
        data.append("price", itemData.price);
        data.append("description", itemData.description);
        if(itemData.featured_image ) {data.append("featured_image", itemData.featured_image)}
      
        submitChanges(data)

        function submitChanges (data) {
        fetch(`/api/editItemForm/${id}`, {
            method: "PATCH",
            body: data
        })
        .then((response) => {
            if(response.ok) {
                response.json().then((updatedItem) => {
                dispatch(updateItemList(updatedItem))
                setItemData({
                    name: '',
                    size: 'S',
                    category: 'Top',
                    sub_category: 'new',
                    quantity: '',
                    price: '',
                    description: '',
                    featured_image: null})
                    resetFileInput()
                    navigate('/shop')
                    dispatch(updateUpdatedAlert(true))
                    setErrors({})
                });
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        })}
    }

return (

    <Container className={`${EditItemFormCSS.container}`}>
    
    { itemData ?    
    <Row className='justify-content-center'>
    <Col lg={12} xl={11} className=''>
    <Card className='text-black rounded-0 border-0'>
    <Card.Body className='p-md-5'>
        <Row className='justify-content-center'>
        <Col md={10} lg={6} xl={5}  className='order-2 order-lg-2'>
        <p className={`${EditItemFormCSS.titleFontSize} text-center h1 fw-bold mb-4 mt-4`}>Edit Item</p>
        <Form className='mx-md-4 edit-item' onSubmit={handleSubmit} autoComplete="off">
            <Form.Group>
            <Form.Label>Item:</Form.Label>
            <Form.Control
                type="text"
                placeholder="Name"
                className='shadow-none rounded-0 border-dark'
                name='name'
                value={itemData.name}
                onChange={(e) => setItemData({...itemData, name: e.target.value})} />
                {name ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{name}</Form.Label> : null}
            </Form.Group>

            <Row className='mb-0'>
            <Col>
            <Form.Group>
            <Form.Label>Size:</Form.Label>
            <Form.Select
                placeholder="Size"
                className='shadow-none rounded-0 border-dark'
                name='size'
                value={itemData.size}
                onChange={(e) => setItemData({...itemData, size: e.target.value})} >
                
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </Form.Select>
            {size ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{size}</Form.Label> : null}
            </Form.Group>
            </Col>

            <Col>
            <Form.Group>
            <Form.Label>Category:</Form.Label>
            <Form.Select
                placeholder="Size"
                className='shadow-none rounded-0 border-dark'
                name='category'
                value={itemData.category}
                onChange={(e) => setItemData({...itemData, category: e.target.value})} >
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
                <option value="Accessory">Accessory</option>
            </Form.Select>
            {category ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{category}</Form.Label> : null}
            </Form.Group>
            </Col>
            </Row>

            <Col>
            <Form.Group>
            <Form.Label>Sub Category:</Form.Label>
            <Form.Select
                placeholder="Sub Category"
                className='shadow-none rounded-0 border-dark'
                name='sub_category'
                value={itemData.sub_category}
                onChange={(e) => setItemData({...itemData, sub_category: e.target.value})} >

                <option value="new">New</option>
                <option value="sale">Sale</option>
                <option value="polos">Polos</option>
                <option value='tshirts'>T-Shirts</option>
                <option value="sweaters">Sweaters</option>
                <option value="joggers">Joggers</option>
                <option value="jeans">Jeans</option>
                <option value="chinos">Chinos</option>
                <option value="hats">Hats</option>
                <option value="shades">Shades</option>
            </Form.Select>
            {sub_category ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{sub_category}</Form.Label> : null}
            </Form.Group>
            </Col>
        
            <Row>
            <Col>
            <Form.Group>
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
                type="number"
                placeholder="Quantity"
                className='shadow-none rounded-0 border-dark'
                name='quantity'
                value={itemData.quantity}
                onChange={(e) => setItemData({...itemData, quantity: e.target.value})} />
                {quantity ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{quantity}</Form.Label> : null}
            </Form.Group>
            </Col>

            <Col>
            <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control
                type="decimal" 
                placeholder="$USD - U.S. dollar"
                className='shadow-none rounded-0 border-dark'
                name='price'
                value={itemData.price}
                onChange={(e) => setItemData({...itemData, price: e.target.value})} />
            {price ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{price}</Form.Label> : null}
            </Form.Group>
            </Col>
            </Row>

            <Form.Group controlId="formFile" className="mb-0">
            <Form.Label>Image:</Form.Label>
            <Form.Control 
            type="file" 
            className='shadow-none rounded-0 border-dark'
            name='featured_image'
            accept='image/png, image/jpeg'
            multiple={false}
            onChange={(e) => setItemData({...itemData, featured_image: e.target.files[0]})}
            ref={inputRef} />
            <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>
                *You may only upload JPG, JPEG, and PNG files.
            </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Description:</Form.Label>
            <Form.Control 
            className='shadow-none rounded-0 border-dark'
            as="textarea" rows={3} 
            name='description'
            value={itemData.description}
            onChange={(e) => setItemData({...itemData, description: e.target.value})} />
            {description ? <Form.Label className={`${EditItemFormCSS.errorMsg} text-danger`}>*{description}</Form.Label> : null}
            </Form.Group>

            <Button type='submit' className={`${EditItemFormCSS.button} btn-dark`} >Save</Button>
            
        </Form>
        </Col>

        <Col md={10} lg={6} xl={7} className='d-flex align-items-center order-1 order-lg-1'>
        <img src={require('../../../assets/addItem.png')}
        className="img-fluid" alt="Sample image" />
        </Col>

        </Row>
    </Card.Body>
    </Card>
    </Col>    
    </Row> : null }
    </Container> );
  }

  export default EditItemForm