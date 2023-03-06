import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openCategoryDropdown: false,
    dropDownLocation: {},
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
        }, 
        categoryLocation: (state, action) =>{
            state.dropDownLocation = action.payload
        }
        
    }
})


export const {openCategory, closeCategory, categoryLocation} = categorySlice.actions

export default categorySlice.reducer