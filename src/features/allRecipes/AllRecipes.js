import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { selectFilteredAllRecipes } from "./allRecipesSlice.js";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
