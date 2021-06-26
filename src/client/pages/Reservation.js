import React, { useState } from "react";
import postData from "./postData";

const initialState = {
    Name: "",
    PhoneNumber: "",
    Email: "",
    Guests: "",
};

const ReservationForm = ({ noOfAvailableReservations }) => {
    const [inputValues, setInputValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    async function onSubmit(e) {
        e.preventDefault();
        const reservation = {
            contact_name: inputValues.Name,
            contact_phonenumber: inputValues.PhoneNumber,
            contact_email: inputValues.Email,
            number_of_guests: inputValues.Guests,

        }
        try {
            await postData('/api/meals', reservation);
            alert(`Yaay! A reservation for ${reservation.number_of_guests} was booked`)

        } catch {

        }
    }
    return ( 
        <div onSubmit={onSubmit} className = "reservation-list-item">
                <div>
                <img className = "add-image-container" src={"https://image.freepik.com/free-photo/concept-delicious-eating-mint-background-top-view_185193-41640.jpg"}></img>

                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="userName" value={inputValues.userName}  onChange={handleOnChange}></input>
          
                <label htmlFor="phoneNumber">Phone number: </label>
                <input type="number" id="phoneNumber" name="phNumber" value={inputValues.phNumber} required onChange={handleOnChange}></input>
           
                <label htmlFor="email">Email:</label>
                <input type="text" id="name" name="email" value={inputValues.email} required onChange={handleOnChange} ></input>
            
                <label htmlFor="NoOfGuests">Guests </label>
                <input type="number" id="NoOfGuests" name="noOfGuests" value={inputValues.noOfGuests} required max={noOfAvailableReservations} onChange={handleOnChange} ></input>
                
                <input type="submit" className="reservation_submit_btn" value="Book now"></input>
                </div>
        
         </div>

    )
}
export default ReservationForm;