import ItemListCSS from './ItemList.module.css';
import { useState } from "react";
import { Container, Row, Spinner } from 'react-bootstrap';
import Item from './Item/Item';



function ItemList() {

    const [clickFilter, setClickFilter ] = useState(false)

    function handleClick(e) {
        setClickFilter(true)
        // onSelectCategory(e.target.value)
    }


  

    return (
    <section className='py-5 mt-5 mb-5'>
        <Container>
                <div className="text-center">
                    <h2 className={`${ItemListCSS.title} position-relative d-inline-block`}>Shop All</h2>
                    {/* position relative and d-inline are for the pink stripe */}
                </div>

            <Row className="g-0">
                <div className = "d-flex flex-wrap justify-content-center mt-5">
                    {/* this centers the buttons having them side by side */}
                    <button type = "button" value='All' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} autoFocus onFocus={handleClick}>All</button>
                        {/* the btn adds the boostrap styling for the buttons and m-2 adds the space between the buttons  */}
                    <button type = "button" value='Tops' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onFocus={handleClick}>Tops</button>
                    <button type = "button" value='Bottoms' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onFocus={handleClick}>Bottoms</button>
                    <button type = "button" value='Accessories' className={`${ItemListCSS.button} btn m-2 text-dark rounded-0`} onFocus={handleClick}>Accessories</button>
                    {/* <button type = "button" value='New Arrival' className = "btn m-2 text-dark rounded-0 filter-btn" onFocus={handleClick}>New Arrival</button> */}
                </div>
                


                    <Container>
                        <Row>
                {/* {itemsArray.map((item) => <Item key={item.id} item={item} setItemPage={setItemPage}  />)} */}
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    </Row>
                </Container>
                
            </Row>
        </Container>
    </section>
    )
}

export default ItemList