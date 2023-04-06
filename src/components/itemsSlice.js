import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
    const response = await fetch("/api/items");
    const items = await response.json();
    return items;
});

export const fetchItem = createAsyncThunk("item/fetchItem", async (id) => {
    const response = await fetch(`/api/items/${id}`);
    const item = await response.json();
    return item;
});

export const deleteItem = createAsyncThunk('item/delete', async (id) => {
    const response = await fetch(`/api/items/${id}`, { method: 'DELETE' });
    if (response.ok) {
    }
})

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        itemsList: [],
        item: {},
        searchInput: '',
        searchedItemList: [],
        addedAlert: false,
        updatedAlert: false,
        errors: null,
        status: "idle",
    },
    reducers: {
        itemDeleted(state, action) {
            const updatedItemList = state.itemsList.filter((item) => item.id !== action.payload.id)
            state.itemsList = updatedItemList
        },
        searchUpdated(state, action) {
            state.searchInput = action.payload    
        },
        filteredSearch(state, action) {
            state.searchedItemList = action.payload
        },
        updateAddedAlert(state, action) {
            state.addedAlert = action.payload
        },
        addItemToList(state, action) {
            state.itemsList.push(action.payload)
        },
        updateUpdatedAlert(state, action) {
            state.updatedAlert = action.payload
        },
        updateItemList(state, action) {
            state.itemsList = state.itemsList.map(
                (item) => {
                if(item.id === action.payload.id) {
                        return action.payload
                    } else { return item}})
              }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItems.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.itemsList = action.payload
            state.status = "idle";
        })
        .addCase(fetchItem.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchItem.fulfilled, (state, action) => {
            if(action.payload.error) {
                state.errors = action.payload
                state.status = "idle";
            } else {
            state.item = action.payload
            state.status = "idle";
        }
        state.status = "idle";
        })
    }
});

export const { itemFiltered, searchUpdated, filteredSearch, showSearch, itemDeleted, updateAddedAlert, updateUpdatedAlert, addItemToList, updateItemList } = itemsSlice.actions;

export default itemsSlice.reducer;