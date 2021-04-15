import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userApi from "../../utils/user/user-api";

export const fetchUserOnLogin = createAsyncThunk(
    "userState/fetchByLoginStatus",
    async (logingObject:{email: string, password: string}) => {
        const response = await userApi.logUserIn(logingObject);
        return response;
    }
)
export const fetchUserOnRegister = createAsyncThunk(
    "userState/fetchByRegisterStatus",
    async (registerObject:{username: string, email: string, password: string}) => {
        const response = await userApi.registerUser(registerObject);
        return response;
    }
)

interface User {
        user_id: number,
        username: string,
        email: string,
        entries: number,
        created_on: string
}

interface UserState {
    userState: User | null 
}

const initialState: UserState = {
    userState: null
}
export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        logUserOut: (state, action: PayloadAction<undefined>) => {state.userState = null},
        incEntries: (state, action: PayloadAction<undefined>) => {if(state.userState) state.userState.entries+=1}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserOnLogin.fulfilled, (state, { payload }) => {state.userState = {...payload}})
        builder.addCase(fetchUserOnLogin.rejected, (state,action) => {state.userState = null})
        builder.addCase(fetchUserOnRegister.fulfilled, (state, { payload }) => {state.userState = {...payload}})
        builder.addCase(fetchUserOnRegister.rejected, (state,action) => {state.userState = null})
    }
})

export const { logUserOut, incEntries } = userSlice.actions;

export default userSlice.reducer;


// {[fetchUserOnLogin.fulfilled] : (state,action) => {}}