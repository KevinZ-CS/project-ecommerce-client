import { Routes, Route } from 'react-router-dom';
import Header from "./pages/HomePage/Header/Header";
import Collection from "./pages/HomePage/Collection/Collection";
import Blogs from "./pages/HomePage/Blogs/Blogs";
import SignUpForm from "./components/NavBar/NavItems/Login/SignUpForm/SignUpForm";
import ItemList from './components/ItemList/ItemList';
import ItemPage from './components/ItemList/Item/ItemPage/ItemPage';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import AddItemForm from './pages/AdminPages/AddItemForm/AddItemForm';
import EditItemForm from './pages/AdminPages/EditItemForm/EditItemForm';
import AdminSignUp from './pages/AdminPages/AdminAccount/AdminSignUp/AdminSignUp';
import AdminLogin from './pages/AdminPages/AdminAccount/AdminLogin/AdminLogin';
import SearchPage from './pages/SearchPage/SearchPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './pages/HomePage/Footer/Footer';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ReviewForm from './components/Review/ReviewForm/ReviewForm';
import OrderConfirmation from './pages/Confirmation/OrderConfirmation/OrderConfirmation';
import AccountConfirmation from './pages/Confirmation/AccountConfirmation/AccountConfirmation';
import AdminAccountConfirmation from './pages/Confirmation/AdminAccountConfirmation/AdminAccountConfirmation';
import DeleteReviewConfirmation from './pages/Confirmation/ReviewConfirmation/DeleteReviewConfirmation/DeleteReviewConfirmation';
import PostReviewConfirmation from './pages/Confirmation/ReviewConfirmation/PostReviewConfirmation/PostReviewConfirmation';
import PrivateAdminRoutes from './utils/PrivateAdminRoutes';
import PrivateUserRoutes from './utils/PrivateUserRoutes';
import PrivateUserSignUpRoutes from './utils/PrivateUserSignUpRoutes';
import ItemListFiltered from './components/ItemList/ItemListFiltered/ItemListFiltered';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "./components/itemsSlice";
import { fetchOrders } from './components/ordersSlice'
import { adminUserLogin, userLogin } from "./components/usersSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    window.onpageshow = function(event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
 }, []);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    fetch("/api/adminUser").then((response) => { 
      if(response.ok) {
        response.json().then((adminUser) => dispatch(adminUserLogin(adminUser)));
      } 
    });
  }, [dispatch])

  useEffect(() => {
    fetch("/api/user").then((response) => { 
      if(response.ok) {
        response.json().then((user) => dispatch(userLogin(user)));
      } 
    });
  }, [dispatch])

  return ( 
    <>
      <NavBar />
      <div className="App">
      
      <Routes>
        <Route path='/' element={<>
          <Header/> 
          <Collection/> 
          <Blogs/> 
          </>} />
        <Route path='/shop' element={<ItemList />} />
        <Route path='/shop/:sub_category' element={<ItemListFiltered />} />
        <Route path='/items/:item_id' element={<ItemPage />} />
        <Route path='/termsOfUse' element={<TermsOfUse />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/adminSignUp' element={<AdminSignUp />} />
        <Route path='/adminLogin' element={<AdminLogin  />} />
        <Route path='/searchPage' element={<SearchPage />} />

        <Route element={<PrivateAdminRoutes />}>
        <Route path='/addItemForm' element={<AddItemForm />} />
        <Route path='/editItemForm/:id' element={<EditItemForm />} />
        </Route>
        
        <Route element={<PrivateUserRoutes />}>
        <Route path='/items/:item_id/reviews' element={<ReviewForm />} />
        </Route>

        <Route element={<PrivateUserSignUpRoutes />}>
        <Route path='/signup' element={<SignUpForm />} />
        </Route>

        <Route path='/orderConfirmation' element={<OrderConfirmation />} />    
        <Route path='/accountConfirmation' element={<AccountConfirmation />} />
        <Route path='/adminAccountConfirmation' element={<AdminAccountConfirmation />} />
        <Route path='/reviewDeleted' element={<DeleteReviewConfirmation />} />
        <Route path='/reviewPosted' element={<PostReviewConfirmation />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
      </div>
      <Footer />
    </> );
  }

export default App;
