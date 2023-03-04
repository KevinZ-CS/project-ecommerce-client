import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/HomePage/Header/Header";
import Collection from "./components/HomePage/Collection/Collection";
import Blogs from "./components/HomePage/Blogs/Blogs";
import Footer from "./components/HomePage/Footer/Footer";
import SignUpForm from "./components/NavBar/NavItems/Login/SignUpForm/SignUpForm";
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<>
        <Header/> 
        <Collection/> 
        <Blogs/> 
        </>} />

        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/shop' element={<ItemList />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
