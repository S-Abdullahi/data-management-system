import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/Modal/modalslice'
import categoryReducer from './features/Dropdown/categoryslice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        category: categoryReducer
    }
})