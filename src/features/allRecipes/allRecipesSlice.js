import allRecipesData from "../../data/data.js";
import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: allRecipesData,
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const { addRecipe, removeRecipe } = allRecipesSlice.actions;
// Exports
///////////////////////////////////////
export default allRecipesSlice.reducer;
