import allRecipesData from "../../data/data.js";
import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";
// listen to favorite actions
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../favoriteRecipes/favoriteRecipesSlice";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: allRecipesData,
  },
  reducers: {},
  extraReducers: {
    [addFavoriteRecipe]: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    [removeFavoriteRecipe]: (state, action) => {
      state.recipes.push(action.payload);
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

// Exports
///////////////////////////////////////
export default allRecipesSlice.reducer;
