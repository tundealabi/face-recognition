import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { uploadToFireStorage } from "firebase/firebase-utils";
import imageApi from "../../utils/face-recog/image-api";

export const fetchImageRecog = createAsyncThunk(
    "faceRecogState/fetchImageRecogStatus",
    async (data:{imageUrl: string, email?: string} ) => {
        const response = await imageApi(data);
        return response;
    }
)
export const fetchImageRecogByUpload = createAsyncThunk(
    "faceRecogState/fetchImageRecogByUploadStatus",
    async (data:{imageFile:File, userEmail: string | undefined}) => {
        const firebaseResponse = await uploadToFireStorage(data);
        const response = await imageApi(firebaseResponse);
        return response;
    }
)


interface FaceRecogState {
    faceRecogState: {status: string, data: null | {imageLink: string, dataSet: []}}
}

const initialState: FaceRecogState = {
    faceRecogState: {status: 'idle', data: null}
}
export const faceRecogSlice = createSlice({
    name: 'faceRecogState',
    initialState,
    reducers: {
        resetFaceRecog: (state, action: PayloadAction<string>) => {state.faceRecogState = {status: action.payload, data: null}},
        imageCheckFailed: (state, action: PayloadAction<string>) => {state.faceRecogState = {status: action.payload, data:null}}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImageRecog.pending, (state) => {state.faceRecogState = {status: 'loading', data: null}})
        builder.addCase(fetchImageRecog.fulfilled, (state, { payload }) => {state.faceRecogState = {status: 'success', data: payload}})
        builder.addCase(fetchImageRecog.rejected, (state,action) => {state.faceRecogState = {status: 'error', data: null}})
        builder.addCase(fetchImageRecogByUpload.pending, (state) => {state.faceRecogState = {status: 'loading', data: null}})
        builder.addCase(fetchImageRecogByUpload.fulfilled, (state, { payload }) => {state.faceRecogState = {status: 'success', data: payload}})
        builder.addCase(fetchImageRecogByUpload.rejected, (state,action) => {state.faceRecogState = {status: 'error', data: null}})
    }
})

export const { resetFaceRecog, imageCheckFailed } = faceRecogSlice.actions;

export default faceRecogSlice.reducer;
