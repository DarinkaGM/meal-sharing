import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/landingPage";
import About from "./pages/About";
import Meal from "./pages/MealsList";
import Footer from "./components/Footer";
import ReservationForm from "./pages/Reservation";
import AddMeal from "./pages/AddMeal";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className= "nav-hero-background">
        <NavBar />
        <Home />
        </div>
        <About />
        <Meal />
        <AddMeal />
        <Footer />
      </Route>
      <Route exact path="/about">
      <NavBar />
        <About />
        <Footer />
    </Route>
      <Route exact path="/meals">
        <NavBar />
        <Meal />
        <Footer />
      </Route>
      <Route exact path="/reservations">
        <NavBar />
        <ReservationForm />
        <Footer />
      </Route>
      <Route exact path="/addMeal">
        <NavBar />
        <AddMeal />
        <Footer />
      </Route>
     </Router>
  );
}

export default App;
