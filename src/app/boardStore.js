import { createSlice } from '@reduxjs/toolkit';

const initialState = { ids : [0,1,2,3,4,5] };

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        value: initialState,
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { update } = boardSlice.actions;

export default boardSlice.reducer;




