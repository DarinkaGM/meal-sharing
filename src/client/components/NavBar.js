import React from "react";

export default function NavBar () {
    return (
        <header className="navigation">
            <div className="nav-items">
            <ul className="nav-ul">
            <li><a href={'/about' }>About</a></li>
            <li><a href={'/meals' }>Meals</a></li>
            <li><a href={'/addmeal' }>Add</a></li>
            <li><a href={'/Reservations' }>Reservations</a></li>
             </ul>
             <a href={'/' }> <img className="logo" src = {"https://image.flaticon.com/icons/png/512/575/575601.png"}></img></a> 
             </div>
            </header>
    )
}

