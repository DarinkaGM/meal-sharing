const { Router } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {

    if ("maxPrice" in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice)
      const newPrice = await knex("meals").where("price", "<=", maxPrice)
      response.json(newPrice)
      return;
    };

    if (request.query.availableReservations) {
          const getAvailableReservation = await knex("meals")
            .select("title", "description")
            .join("reservation", "meal.id", "=", "reservation.meal_id")
            .where("max_reservations", ">", "number_of_guests")
            .groupBy("reservation.meal_id");
          response.json(getAvailableReservation);

        }


    if ("title" in request.query) {
      const matchingTitle = request.query.title.toLocaleLowerCase()
      const getMatchingTitle = await knex("meals").where("title", "like", `%${matchingTitle}%`)
      response.json(getMatchingTitle)
      return;
    };

    if ("createdAfter" in request.query) {
      const creationDate = new Date(request.query.createdAfter)
      const newCreationDate = await knex("meals").where("created_date", ">=", creationDate)
      response.json(newCreationDate)
      return;
    }

    if ("limit" in request.query) {
      const mealLimit = parseFloat(request.query.limit)
      const limitingNumber = await knex("meals").limit(mealLimit)
      response.json(limitingNumber)
      return;
    } else {
      const meals = await knex("meals")
      response.json(meals);
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
    const mealById = await knex("meals")
      .where({
        id: parseInt(request.params.id)
      })
    response.json(mealById)
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updatedMealId = await knex("meals")
      .where({
        id: Number(request.params.id)
      })
      .update(request.body)
    response.json(updatedMealId)
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedById = await knex("meals")
      .where({
        id: request.params.id
      }).del()
    response.json(deletedById)
  } catch (error) {
    throw error;
  }
});

module.exports = router;