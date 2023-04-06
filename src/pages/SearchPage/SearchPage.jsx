import SearchPageCSS from './SearchPage.module.css';
import { Container, Row } from 'react-bootstrap';
import Item from '../../components/ItemList/Item/Item';
import { useSelector } from "react-redux";

function SearchPage() {

const searchDisplay = useSelector((state) => state.items.searchedItemList)
const searchInput = useSelector((state) => state.items.searchInput)
const showSearch = useSelector((state) => state.modals.showSearch)

return (
    <Container className={SearchPageCSS.bottomMargin}> 
        <div className="text-center">
            <h2 className={`${SearchPageCSS.title} position-relative d-inline-block`}>Search Results</h2>
        </div>

        <Row className="g-0  ">

            <div className="  gx-0 gy-3 row">
            { searchDisplay.length && searchInput ? 
            searchDisplay.map((item) => <Item key={item.id} item={item} />) : showSearch ? 
            <Container className={SearchPageCSS.bottomMargin2}></Container> :
            <div className="text-center mt-5 mb-5">Sorry, nothing matched 
            <span className="fw-bold" >'{searchInput}'</span>. Check out other items in our store. </div>}
            </div>

        </Row>
    </Container>
    )}

export default SearchPage