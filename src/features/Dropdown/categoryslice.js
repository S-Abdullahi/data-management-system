import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openCategoryDropdown: false
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        openCategory : (state, action) =>{
            state.openCategoryDropdown = !state.openCategoryDropdown;
        },
        closeCategory : (state,action) =>{
            state.openCategoryDropdown = false;
        }
        
    }
})


export const {openCategory, closeCategory} = categorySlice.actions

export default categorySlice.reducer