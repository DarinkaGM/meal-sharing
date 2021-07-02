import React, { useState } from "react";
import postData from "./postData";

export default function AddMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit() {
    const newMeal = {
      title: title,
      description: description,
      location: location,
      price: price,
    };
    const response = postData("api/meals", newMeal);
    if (response) {
      alert(`The meal '${newMeal.title}' was added`);
    } else {
      throw new Error(response.status);
    }
  }

  return (
    <div className="add-meal-section">
      <div className="add-meal-list-item">
        <img
          className="add-image-container"
          src={
            "https://i.ibb.co/ZSVX0WR/Hungry-dark-haired-woman-touches-stomach-wants-to-eat-something-tasty-wears-purple-t-shirt-and-pink.jpg"
          }
        ></img>
        <label>
          Share your favorite meal!
          <input
            type="text"
            placeholder="Enter meal"
            name="tile"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Tell us about it!
          <input
            type="text"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Where?
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          $
          <input
            type="number"
            placeholder="Price in DKK"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button className="add-button" onClick={onSubmit}>
          Add meal
        </button>
      </div>
    </div>
  );
}

