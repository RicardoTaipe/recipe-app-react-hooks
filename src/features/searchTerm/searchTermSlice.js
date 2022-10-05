import { createSlice } from "@reduxjs/toolkit";

// Slice Object
///////////////////////////////////////

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state) => (state = ""),
  },
});

// Selectors
///////////////////////////////////////

export const selectSearchTerm = (state) => state.search;

// Exports
///////////////////////////////////////
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
