import SearchBarCSS from './Search.module.css';
import './SearchCustom.css';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchUpdated, filteredSearch } from '../../../itemsSlice';
import { showSearch } from '../../../modalsSlice';

function SearchBar() {

const navigate = useNavigate();
const [disable, setDisable] = useState(true)
const dispatch = useDispatch();
const searchInput = useSelector((state) => state.items.searchInput)
const itemsList = useSelector((state) => state.items.itemsList)
const showModal = useSelector((state) => state.modals.showSearch)
const searchDisplay = itemsList.filter((item) =>
item.name.split(' ').join('').toLowerCase().includes(searchInput.split(' ').join('').toLowerCase())
);

const handleClose = () => {
dispatch(showSearch(false))
};
    
function handleSearch(e) {
dispatch(searchUpdated(e.target.value))

if(e.target.value) {
setDisable(false)} else {
    setDisable(true)
}
}
    
function handleClickSearch() {
dispatch(filteredSearch(searchDisplay))
dispatch(showSearch(false))
setDisable(true)
navigate("/searchPage")
}

function handleKeyDown(e) {
if(searchInput&&e.keyCode === 13) {
e.preventDefault()
dispatch(filteredSearch(searchDisplay))
dispatch(showSearch(false))  
setDisable(true)
navigate("/searchPage")
} else if(e.keyCode === 13) {
    navigate("/searchPage")
}
}

return (
            
    <Modal show={showModal} onHide={handleClose} className='mt-3'>
    <Modal.Header className="border-0 pb-0" closeButton>
    <Modal.Title>Search</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <div id='searchBar' className="input-group">
        <input type="text" 
        className={`form-control ${SearchBarCSS.searchInput} `} 
        placeholder="Search..." autoComplete="off" 
        autoFocus 
        onChange={handleSearch} 
        onKeyDown={handleKeyDown} />
        <div className="input-group-append">
            <Button disabled={disable} onClick={handleClickSearch} className={`${SearchBarCSS.button}`}>
            <FontAwesomeIcon icon={faSearch} className="me-1" />
            </Button>  
        </div>
        </div>
        </Form>
    </Modal.Body>
    </Modal> );
}
    
export default SearchBar