import AddItemFormCSS from './AddItemForm.module.css';
import './AddItemFormCustom.css';
import { useState, useRef } from "react";
import { Form, Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateAddedAlert, addItemToList } from '../../../components/itemsSlice'

function AddItemForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        name: '',
        size: 'S',
        category: 'Top',
        sub_category: 'new',
        quantity: '',
        price: '',
        description: '',
        admin_user_id: '',
        featured_image: null
    })

    const [errors, setErrors] = useState({})
    const { name, size, category, sub_category, quantity, price, description, featured_image } = errors
   
    const inputRef = useRef(null);
    const resetFileInput = () => {
        inputRef.current.value = null;
    }

    function handleSubmit(e) {
   
        e.preventDefault();
        const data = new FormData();

        data.append("name", item.name);
        data.append("size", item.size);
        data.append("category", item.category);
        data.append("sub_category", item.sub_category);
        data.append("quantity", item.quantity);
        data.append("price", item.price);
        data.append("description", item.description);
        data.append("featured_image", item.featured_image);

        submitItem(data)

        function submitItem (data) {
            fetch("/api/items", {
                method: "POST",
                body: data
            })
            .then((response) => {
                if(response.ok) {
                    response.json().then((newItem) => {console.log(newItem)
                    dispatch(addItemToList(newItem))
                    setItem({
                        name: '',
                        size: 'S',
                        category: 'Top',
                        sub_category: 'new',
                        quantity: '',
                        price: '',
                        description: '',
                        featured_image: null})
                        resetFileInput()
                        setErrors({})
                        navigate('/shop')
                        dispatch(updateAddedAlert(true))
                    });
                } else {
                    response.json().then((errorData) => setErrors(errorData.errors));
                }
            })
        }
    }

    return (

    <Container className={`${AddItemFormCSS.container}`}>
        <Row className='justify-content-center'>
        <Col lg={12} xl={11} className=''>
        <Card className='text-black rounded-0 border-0'>
        <Card.Body className='p-md-5'>
            <Row className='justify-content-center'>
            <Col md={10} lg={6} xl={5}  className='order-2 order-lg-1'>
                <p className={`${AddItemFormCSS.titleFontSize} text-center h1 fw-bold mb-4 mt-4`}>Add Item</p>
                <Form className='mx-md-4 add-item' onSubmit={handleSubmit} autoComplete="off">
                <Form.Group>
                <Form.Label>Item:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className=' shadow-none mb-0 rounded-0 border-dark'
                  name='name'
                  value={item.name}
                  onChange={(e) => setItem({...item, name: e.target.value})}/>

                    {name ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{name}</Form.Label> : null}

                </Form.Group>

                <Row className='mb-0'>
                <Col>
                <Form.Group>
                <Form.Label>Size:</Form.Label>
                <Form.Select
                  placeholder="Size"
                  className='shadow-none rounded-0 border-dark'
                  name='size'
                  value={item.size}
                  onChange={(e) => setItem({...item, size: e.target.value})}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </Form.Select>

                    {size ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{size}</Form.Label> : null}

                </Form.Group>
                </Col>

                <Col>
                <Form.Group>
                <Form.Label>Category:</Form.Label>
                <Form.Select
                  placeholder="Size"
                  className='shadow-none rounded-0 border-dark'
                  name='category'
                  value={item.category}
                  onChange={(e) => setItem({...item, category: e.target.value})} >
                    <option value="Top">Top</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Accessory">Accessory</option>
                </Form.Select>
                    {category ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{category}</Form.Label> : null}
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
                  value={item.sub_category}
                  onChange={(e) => setItem({...item, sub_category: e.target.value})} >
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
                    {sub_category ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{sub_category}</Form.Label> : null}
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
                    value={item.quantity}
                    onChange={(e) => setItem({...item, quantity: e.target.value})} />

                    {quantity ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{quantity}</Form.Label> : null}

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
                    value={item.price}
                    onChange={(e) => setItem({...item, price: e.target.value})} />
                {price ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{price}</Form.Label> : null}
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
                    onChange={(e) => setItem({...item, featured_image: e.target.files[0]})}
                    ref={inputRef} />
                <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*You may only upload JPG, JPEG, and PNG files.</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>Description:</Form.Label>
                <Form.Control 
                    className='shadow-none rounded-0 border-dark'
                    as="textarea" rows={3} 
                    name='description'
                    value={item.description}
                    onChange={(e) => setItem({...item, description: e.target.value})} />
                    {description ? <Form.Label className={`${AddItemFormCSS.errorMsg} text-danger`}>*{description}</Form.Label> : null}
                </Form.Group>
                                    

                {item.featured_image ? <Button type='submit' className={`${AddItemFormCSS.button} btn-dark`} >Add</Button> :
                <Button type='submit' className={`${AddItemFormCSS.DisabledButton} btn-dark`} disabled={true} >Add</Button>
                }

                </Form>
                </Col>

                <Col md={10} lg={6} xl={7} className='d-flex align-items-center order-1 order-lg-2'>
                <img src={require('../../../assets/addItem.png')}
                className="img-fluid" alt="Sample image" />
                </Col>

            </Row>
        </Card.Body>
        </Card>
        </Col> 
        </Row>
    </Container> );
  }

  export default AddItemForm