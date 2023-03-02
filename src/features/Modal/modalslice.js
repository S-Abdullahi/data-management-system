import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    openNewInstanceModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openNewInstanceModal: (state, action) => {
            console.log('true')
            state.openNewInstanceModal = true;
        },
        closeNewInstanceModal: (state, action) => {
            state.openNewInstanceModal = false;
        }
    }
})


export const {openNewInstanceModal, closeNewInstanceModal} = modalSlice.actions

export default modalSlice.reducer