import React, { useState, useContext } from "react";
import "./AddRecipe.css";
import { RecipeCrudOperationsContext } from "../../../context/RecipeCrudOperationsContext";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const { isLoading, addNewRecipe } = useContext(RecipeCrudOperationsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setDescriptionErr(false);
    setImageErr(false);

    if (title.trim() && description.trim() && image.trim()) {
      addNewRecipe({ title, description, image });
      setTitle("");
      setDescription("");
      setImage("");
    } else {
      !title.trim() && setTitleErr(true);
      !description.trim() && setDescriptionErr(true);
      !image.trim() && setImageErr(true);
    }
  };

  return (
    <>
      <h2 className="form-title">Add Recipe</h2>
      <form className="form-recipe" onSubmit={handleSubmit}>
        <div className="form-input">
          <div className="recipe-title">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Recipe Title"
            />
            {titleErr && (
              <p className="input-error">Recipe Title can not be empty!</p>
            )}
          </div>
          <div className="recipe-desc">
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Recipe Description"
            />
            {descriptionErr && (
              <p className="input-error">
                Recipe Description can not be empty!
              </p>
            )}
          </div>
          <div className="recipe-image">
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />
            {imageErr && (
              <p className="input-error">Image URL can not be empty!</p>
            )}
          </div>
        </div>
        <div className="form-button">
          <button className="btn-add">
            {isLoading.add ? "Loading..." : "Add Recipe"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
