import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeFavoriteRecipe,
  selectFilteredFavoriteRecipes,
} from "./favoriteRecipesSlice.js";
import Spinner from "../../components/Spinner";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const unfavoriteIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

export const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
