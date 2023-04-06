import { createSlice, current } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        showSearch: false,
        showLogin: false,
        showCart: false,
        showDeleteMsg: false, 
        showAdminUserAcc: false,
        showUserAcc: false,
    },
    reducers: {
        showSearch(state, action) {
            state.showSearch = action.payload
        },  
        showLogin(state, action) {
            state.showLogin = action.payload
        },
        showCart(state, action) {
            state.showCart = action.payload
        },
        showDelete(state, action) {
            state.showDeleteMsg = action.payload
        },
        showAdminUserAcc(state, action) {
            state.showAdminUserAcc = action.payload
        },
        showUserAcc(state, action) {
            state.showUserAcc = action.payload
        }
    }
});

export const { showSearch, showCart, showLogin, showDelete, showAdminUserAcc, showUserAcc } = modalsSlice.actions;

export default modalsSlice.reducer;