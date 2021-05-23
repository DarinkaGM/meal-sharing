const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
      try {
        if (request.query.maxPrice) {
          const maxPrice = Number(request.query.maxPrice);
          const regularPrice = await knex("meals").where("Price", "<", maxPrice);
          response.json(regularPrice);
        }

        if (request.query.availableReservations) {
          const getAvailableReservation = await knex("meals")
            .select("title", "description")
            .join("reservation", "meal.id", "=", "reservation.meal_id")
            .where("max_reservations", ">", "number_of_guests")
            .groupBy("reservation.meal_id");
          response.json(getAvailableReservation);

        }
        if (request.query.title) {
          const matchingTitle = request.query.title;
          const getMatchingTitle = await knex("meals").where("title", "like", `%${matchingTitle}%`);
          response.send(getMatchingTitle);

        }

        if (request.query.createdAfter) {
          const creationDate = new Date(request.query.createdAfter);
          const newCreationDate = await knex("meals").where("created_date", ">", creationDate);
          response.json(newCreationDate);
        }

        if (request.query.limit) {
          const mealLimit = Number(request.query.limit);
          const limitingNumber = await knex("meals").select("*").limit(mealLimit);
          response.json(limitingNumber);
        } else {
          const titles = await knex("meals").select("title");
          response.json(titles);
        }
      } catch (error) {
        throw error;
      });



    router.post("/", async (req, res) => {
      try {
        const addMeal = await knex("meal").insert(req.body);
        res.json(addMeal);
      } catch (error) {
        throw error;
      }
    });

    router.get("/:id", async (req, res) => {
      try {
        const mealById = await knex("meal").where(req.params);
        res.json(mealById);
      } catch (error) {
        throw error;
      }
    });

    router.put("/:id", async (req, res) => {
      try {
        const updatedMealId = await knex("meal").where(req.params).update(req.body);
        res.json(updatedMealId);
      } catch (error) {
        throw error;
      }
    });


    router.delete("/:id", async (req, res) => {
      try {
        const deletedById = await knex("meal").where(req.params).del();
        res.json(deletedById);
      } catch (error) {
        throw error;
      }
    });

    module.exports = router;