import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/Modal/modalslice'

export const store = configureStore({
    reducer: {
        modal: modalReducer
    }
})