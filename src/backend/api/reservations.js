const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        const reservations = await knex("reservation").select("id");
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

router.post("/", async (req, res) => {
    try {
        const newReservation = await knex("reservation").insert(req.body);
        res.json(newReservation);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reservationById = await knex("reservation").where(req.params);
        res.json(reservationById);
    } catch (error) {
        throw error;
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateReservationId = await knex("reservation")
            .where(req.params)
            .update(req.body);
        res.json(updateReservationId);
    } catch (error) {
        throw error;
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleteById = await knex("reservation")
            .where(req.params)
            .del();
        res.json(deleteById);
    } catch (error) {
        throw error;
    }
});


module.exports = router;