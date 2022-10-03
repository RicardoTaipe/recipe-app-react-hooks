import allRecipesData from "../../data/data.js";
import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: allRecipesData,
  },
  reducers: {},
});

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Exports
///////////////////////////////////////
export default allRecipesSlice.reducer;
