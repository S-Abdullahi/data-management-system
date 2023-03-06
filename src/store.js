import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/Modal/modalslice'
import categoryReducer from './features/Dropdown/categoryslice'
import statusReducer from './features/Dropdown/statusSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        category: categoryReducer,
        status: statusReducer
    }
})