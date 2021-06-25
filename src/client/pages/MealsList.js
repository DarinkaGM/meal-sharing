import React, { useState, useEffect } from "react";

export default function Meal () {

    return (

            <div className= "meals-section">
                <div className = "meal-list-item">
                <img className = "image-container" src={"https://image.freepik.com/free-photo/top-view-assortment-sushi-goodies_23-2148930377.jpg"}></img>
                                    
                <h4 >Sushi </h4>
                <p>Description: </p>
                <p>Location: </p>
                <p>Price : DKK</p>
                </div>

                <div className = "meal-list-item">
                <img className = "image-container" src={"https://i.ibb.co/CVD979K/close-up-hand-holding-taco-with-copy-space-6.jpg"}></img>                
                <h4 >Taco </h4>
                <p>Description: </p>
                <p>Location: </p>
                <p>Price : DKK</p>
                </div>

                <div className = "meal-list-item">
                <img className = "image-container" src={"https://image.freepik.com/free-photo/female-hand-hold-croissant-sandwich-violet_185193-43700.jpg"}></img>                
                <h4 >Croissant </h4>
                <p>Description: </p>
                <p>Location: </p>
                <p>Price : DKK</p>
                </div>

                
                
            </div>
       
    )
}
