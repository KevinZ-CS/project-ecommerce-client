import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';


export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    const response = await fetch("/api/orders");
    const order = await response.json();
    return order;
});

export const deleteOrder = createAsyncThunk('orders/delete', async (id) => {
    const response = await fetch(`/api/removeFromCart/${id}`, { method: 'DELETE' });
    if (response.ok) {
    }
})

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orderList: [],
        errors: null,
        status: "idle",
    },
    reducers: {
        addOrderToList(state, action) {
            state.orderList.push(action.payload)
        },
        orderDeleted(state, action) {
            const updatedOrderList = state.orderList.filter((item) => item.id !== action.payload.id)
            state.orderList = updatedOrderList
        },
        updateOrderList(state, action) {
            state.orderList = state.orderList.map(
                (item) => {
                if(item.id === action.payload.id) {
                        return action.payload
                    } else { return item}})
              }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchOrders.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.orderList = action.payload
            state.status = "idle";
        })
    }
});

export const { addOrderToList, orderDeleted, updateOrderList } = ordersSlice.actions;

export default ordersSlice.reducer;