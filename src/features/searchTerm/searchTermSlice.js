import { createSlice } from "@reduxjs/toolkit";

// Slice Object
///////////////////////////////////////

export const searchSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

// Selectors
///////////////////////////////////////

export const selectSearchTerm = (state) => state.searchTerm.searchTerm;

// Exports
///////////////////////////////////////
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
