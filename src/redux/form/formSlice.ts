import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    type: string
}

const initialState: FormState = {
    type: "login"
}
export const formSlice = createSlice({
    name: 'formType',
    initialState,
    reducers: {
        selectFormType: (state, action: PayloadAction<string>) => {state.type = action.payload}
    }
})

export const { selectFormType } = formSlice.actions;

export default formSlice.reducer;