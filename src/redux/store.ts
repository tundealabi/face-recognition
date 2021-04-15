import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import formSliceReducer from "./form/formSlice";
import userSliceReducer from "./user/userSlice";
import faceRecogSliceReducer from "./face-recognition/faceRecogSlice";

const middlewares = [...getDefaultMiddleware()];
if(process.env.NODE_ENV !== "production") middlewares.push(logger)



export const store = configureStore({
    reducer: {
        form: formSliceReducer,
        user: userSliceReducer,
        faceRecog: faceRecogSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
