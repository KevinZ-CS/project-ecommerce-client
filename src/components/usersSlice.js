import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
});

export const fetchAdminUser = createAsyncThunk("adminUser/fetchAdminUser", async () => {
    const response = await fetch("/api/adminUser");
    const adminUser = await response.json();
    return adminUser;
});

export const deleteAdminSession = createAsyncThunk('adminUser/delete', async () => {
    const response = await fetch('/api/adminLogout', { method: 'DELETE' });
    if (response.ok) {}
});

export const deleteUserSession = createAsyncThunk('user/delete', async () => {
    const response = await fetch('/api/userLogout', { method: 'DELETE' });
    if (response.ok) {}
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        adminUser: null,
        errors: null,
        status: "idle",
    },
    reducers: {
        userLogin(state, action) {
            state.user = action.payload;
        },
        userDelete(state, action) {
            state.user = action.payload
        },
        adminUserLogin(state, action) {
            state.adminUser = action.payload;
            
        },
        adminUserDelete(state, action) {
            state.adminUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = "idle";
        })
        .addCase(fetchAdminUser.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchAdminUser.fulfilled, (state, action) => {
            if(action.payload.errors) {
                state.errors = action.payload
                state.status = "idle";
            } else {
            state.adminUser = action.payload
            state.status = "idle";
        }
        
        })
        .addCase(deleteAdminSession.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteAdminSession.fulfilled, (state, action) => {
            state.adminUser = null
        })
        .addCase(deleteUserSession.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteUserSession.fulfilled, (state) => {
            state.user = null
        })
        .addDefaultCase((state, action) => current(state))
    }
});

export const { userLogin, userDelete, adminUserLogin, adminUserDelete } = usersSlice.actions;

export default usersSlice.reducer;