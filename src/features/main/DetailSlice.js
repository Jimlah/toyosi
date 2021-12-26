import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    detail: null
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.detail = action.payload;
        },
        clearDetail: (state) => {
            state.detail = null;
        }
    }
});

export const { setDetail, clearDetail } = detailSlice.actions;
