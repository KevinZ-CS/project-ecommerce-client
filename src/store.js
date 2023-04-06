import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './components/itemsSlice';
import modalsReducer from './components/modalsSlice';
import usersReducer from './components/usersSlice';
import ordersReducer from './components/ordersSlice';



const store = configureStore({
  
  reducer: {
    items: itemsReducer,
    modals: modalsReducer,
    users: usersReducer,
    orders: ordersReducer,
  },
});

export default store;