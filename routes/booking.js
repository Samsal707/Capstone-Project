import express from "express";
import {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  updateBooking,
} from "../controllers/booking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", createBooking);

//UPDATE
router.put("/:id", updateBooking);
//DELETE
router.delete("/:id/:userid", deleteBooking);
//GET

router.get("/:id", getBooking);
//GET ALL

router.get("/", verifyAdmin, getBookings);

export default router;