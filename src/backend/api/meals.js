const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if ("maxPrice" in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);
      const newPrice = await knex("meals").where("price", "<=", maxPrice);
      response.json(newPrice);
      return;
    }

    if ("availableReservations" in request.query) {
      let availableReservations = request.query.availableReservations;
      if (availableReservations === "true") {
        const filteredMeals = await knex
          .raw(
            `select meal.id AS meal_id, meal.title, meal.max_reservations, coalesce(SUM(reservation.number_of_guests), 0) AS total_reservations
                from meal
                left join reservation on meal.id = reservation.meal_id
                group by meal.id
                having 
                meal.max_reservations > total_reservations`
          )
          .then((result) => result[0]);

        response.send(filteredMeals);
      }

      if ("title" in request.query) {
        const title = request.query.title.toLowerCase();
        const mealByTitle = await knex("meal").where(
          "meal.title",
          "like",
          "%" + title + "%"
        );
        response.json(mealByTitle);
      }

      if ("createdAfter" in request.query) {
        const creationDate = new Date(request.query.createdAfter);
        const newCreationDate = await knex("meals").where(
          "created_date",
          ">=",
          creationDate
        );
        response.json(newCreationDate);
        return;
      }

      if ("limit" in request.query) {
        const mealLimit = parseFloat(request.query.limit);
        const limitingNumber = await knex("meals").limit(mealLimit);
        response.json(limitingNumber);
        return;
      } else {
        const meals = await knex("meals");
        response.json(meals);
      }
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const addMeal = await knex("meals").insert(request.body);
    response.json(addMeal);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const mealById = await knex("meals").where({
      id: parseInt(request.params.id),
    });
    response.json(mealById);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(404).send("User IDs should be integers.");
      return;
    } else {
      const meals = await knex("meal").where({ id: id }).update(request.body);
      response.json(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedById = await knex("meals")
      .where({
        id: request.params.id,
      })
      .del();
    response.json(deletedById);
  } catch (error) {
    throw error;
  }
});

module.exports = router;