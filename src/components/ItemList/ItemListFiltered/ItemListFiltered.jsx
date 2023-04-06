import ItemLisFilteredCSS from './ItemListFiltered.module.css';
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemNotAvailable from '../../../pages/PageNotFound/ItemNotAvailable/ItemNotAvailable';

function ItemListFiltered() {

const subCategories = ['new', 'sale', 'tshirts', 'polos', 'sweaters', 'joggers', 'jeans', 'chinos', 'hats', 'shades']
const { sub_category } = useParams()

const itemsList = useSelector((state) => state.items.itemsList)
const itemsDisplay = itemsList&&itemsList.filter(
    (item) => item.sub_category === sub_category
   );

function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

return (
    <>
        { subCategories.includes(sub_category.toLowerCase())&&itemsDisplay.length > 0 ? 
        <Container className='py-5 mt-5 mb-3' >
        <div className="text-center">
            <h2 className={`${ItemLisFilteredCSS.title} position-relative d-inline-block`}>{capitalized(sub_category)}</h2>
        </div>
        <Row className="g-0">
        <Container className='mt-4'>
        <Row>
            {itemsDisplay.map((item) => <Item key={item.id} item={item} />)}
        </Row>
        </Container>
        </Row>
        </Container> :  <ItemNotAvailable />
        }
    </> )
}

export default ItemListFiltered