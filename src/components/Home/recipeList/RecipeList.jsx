import React, { useContext } from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeList.css";
import { RecipeCrudOperationsContext } from "../../../context/RecipeCrudOperationsContext";

const RecipeList = () => {
  const { recipes, isLoading } = useContext(
    RecipeCrudOperationsContext
  );

  return (
    <div className="all-recipe">
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <RecipeCard
          {...recipe}
          key={recipe.id}
          recipeId={recipe.id}
        />
      ))}
    </div>
  );
};

export default RecipeList;
