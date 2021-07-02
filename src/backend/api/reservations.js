const { Router } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
    const reservations = await knex("reservations");
    res.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newReservation = await knex("reservations").insert(request.body);
    res.json(newReservation);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reservationById = await knex("reservations").where({
      id: parseInt(req.params.id),
    });
    res.json(reservationById);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateReservationsId = await knex("reservations")
      .where({
        id: req.params.id,
      })
      .update(request.body);
    res.json(updateReservationsId);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteById = await knex("reservations")
      .where({
        id: req.params.id,
      })
      .del();
    res.json(deleteById);
  } catch (error) {
    throw error;
  }
});

module.exports = router;