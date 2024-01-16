import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPtSearch: false,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPtSearch = !state.showGPtSearch;
        }
    }
});


export const {toggleGPTSearchView} = GPTSlice.actions;
export default GPTSlice.reducer;