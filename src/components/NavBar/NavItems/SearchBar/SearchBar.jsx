import SearchBarCSS from './Search.module.css';
import './SearchCustom.css';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function SearchBar({ show, setShow, searchValue, setSearchValue }) {

    const [disable, setDisable] = useState(true)
    const [searchOnDeck, setSearchOnDeck] = useState('')

    const [search, setSearch] = useState('')
    //search state is used to filter the array


    const handleClose = () => setShow(false);
    
    function handleSearch(e) {
        setSearchOnDeck(e.target.value)
        if(e.target.value) {
        setDisable(false)} else {
            setDisable(true)
        }
    }
    //searchOnDeck is used to check if there is text is entered in the input
    //if there is no input the user should not have access to the search button
  
    
    
    
    function handleClickSearch() {
        setSearch(searchOnDeck)
        setShow(false)
        setDisable(true)
     
    }

    //we are using searchOnDeck state instead of search state because in the original application search does not reset to an empty string since it lives in the App component
    
    return (
            
        <>      
          <Modal show={show} onHide={handleClose} className='mt-3'>
            <Modal.Header className="border-0 pb-0" closeButton>
            <Modal.Title>Search</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                 <Form>
                    <div id='searchBar' className="input-group">
                      <input type="text" className={`form-control ${SearchBarCSS.searchInput}`} placeholder="Search..." autoComplete="off" autoFocus onChange={handleSearch} />
                      <div className="input-group-append">
                         {searchOnDeck ? 
                            <NavLink to='/searchPage' >
                            <Button disabled={disable} onClick={handleClickSearch} className={`${SearchBarCSS.button}`}>
                            <FontAwesomeIcon icon={faSearch} className="me-1" />
                            </Button> </NavLink> :      
                            <Button disabled={disable} className={`${SearchBarCSS.button}`}>
                            <FontAwesomeIcon icon={faSearch} className="me-1" />
                            </Button>}
                        </div>
                        </div>
                    </Form>
                    </Modal.Body>
            </Modal>
        </>  
        );
      }
    
export default SearchBar