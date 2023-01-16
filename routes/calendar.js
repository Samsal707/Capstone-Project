import express from "express";
import {
  createBookedDate,
  updateBookedDate,
  deleteBookedDate,
  getBookedDate,
  getBookedDates,
} from "../controllers/calendar.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:userid", createBookedDate);

//UPDATE
router.put("/:id", updateBookedDate);
//DELETE
router.delete("/:id/:userid", deleteBookedDate);
//GET

router.get("/:id", getBookedDate);
//GET ALL

router.get("/", verifyAdmin, getBookedDates);

export default router;