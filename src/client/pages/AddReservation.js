import React, { useState } from "react";
import postData from "./postData";

export default function AddReservation({ meal, setReservationForm }) {
  const initialState = {
    Name: "",
    PhoneNumber: "",
    Email: "",
    Guests: "",
  };
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      contact_name: values.Name,
      contact_phonenumber: values.PhoneNumber,
      contact_email: values.Email,
      number_of_guests: values.Guests,
    };
    const response = postData("api/reservations", newReservation);
    if (response) {
      const message = `Yaay! A reservation for ${newReservation.number_of_guests} was booked`;
      alert(message);
    }
  };

  return (
    <div>
      <form className="reservation-list-item">
        <img
          className="add-image-container"
          src={
            "https://image.freepik.com/free-photo/concept-delicious-eating-mint-background-top-view_185193-41640.jpg"
          }
        >
        </img>
        <label>
          Number of guests:
          <input
            type="number"
            value={values.Guests}
            onChange={handleInputChange}
            name="Guests"
            min="1"
            placeholder="Number of guests"
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={values.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Name"
            required
          />
        </label>
        <label>
          E - mail
          <input
            type="text"
            value={values.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          Phone number:
          <input
            type="number"
            value={values.phoneNumber}
            onChange={handleInputChange}
            name="phoneNumber"
            placeholder="Phone number"
            required
          />
        </label>
        <button className="add-button" onClick={onSubmit}>
          Add reservation
        </button>
      </form>
    </div>
  );
}