import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenStatus: false,
    statusLocation: {}
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        openStatus: (state, action)=>{
            state.isOpenStatus = !state.isOpenStatus
        },
        closeStatus: (state, action) =>{
            state.isOpenStatus = false
        },
        locateStatus: (state, action) => {
            state.statusLocation = action.payload
        }

    }
})

export const {openStatus, closeStatus, locateStatus} = statusSlice.actions
export default statusSlice.reducer