import React, { useState, useContext } from "react";
import "./RecipeCard.css";
import { RecipeCrudOperationsContext } from "../../../context/RecipeCrudOperationsContext";

const RecipeCard = ({ title, description, image, recipeId }) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  const { deleteRecipe } = useContext(RecipeCrudOperationsContext);

  return (
    <div className="recipe-card">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <div className="btn-delete">
        <hr />
        <button
          onClick={async () => {
            setIsDeletedLoading(true);
            await deleteRecipe(recipeId);
            setIsDeletedLoading(false);
          }}
        >
          {isDeletedLoading ? "Loading..." : "Sil"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
