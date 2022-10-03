import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// Slice Object
///////////////////////////////////////
export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.name !== action.payload.name
      );
    },
  },
});

// Selectors
///////////////////////////////////////

export const selectFavoriteRecipes = (state) => state.favoriteRecipes.recipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Exports
///////////////////////////////////////
export const { addFavoriteRecipe, removeFavoriteRecipe } =
  favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
