import React, { useState } from "react";
import postData from "./postData";


const initialInputState = {
    title: "",    
    description: "",
    location: "",
    price: ""
};
const AddMeal = () => {
    const [inputValues, setInputValues] = useState(initialInputState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    async function onSubmit(e) {
        e.preventDefault();
        const meal = {
            title: inputValues.title,
            description: inputValues.description,
            location: inputValues.location,
            price: inputValues.price,
        }

        try {
            await postData('/api/meals', meal);
            alert(`Yaay! ${meal.title} was added`)

        } catch {

        }
        
    }

    return (
        <div className= "add-meal-section">
            
            <div className = "add-meal-list-item">
                    <img className = "add-image-container" src={"https://i.ibb.co/ZSVX0WR/Hungry-dark-haired-woman-touches-stomach-wants-to-eat-something-tasty-wears-purple-t-shirt-and-pink.jpg"}></img>
                    <div>
                    <label htmlFor="title">Your favorite meal is... </label>
                    <input type="text" id="title" name="title" value={inputValues.title} required onChange={handleOnChange} placeholder="Enter meal"></input>
                    
                    <label htmlFor="description">Tell us about it! </label>
                    <input type="text"  id="description" name="description" value={inputValues.description} required onChange={handleOnChange} placeholder="Enter description"></input>
                    
                    <label htmlFor="location">Where? </label>
                    <input type="text" id="location" name="location" required value={inputValues.location} onChange={handleOnChange} placeholder="Enter location"></input>
                    
                    <label htmlFor="price">$ </label>
                    <input type="number" id="price" name="price" value={inputValues.price} required onChange={handleOnChange} placeholder="Prace in DKK" ></input>
                    
                    <input onClick={onSubmit}  type="submit" value="Add meal"></input>             
                    </div> 
            </div>  

        </div>
    )

}
export default AddMeal;