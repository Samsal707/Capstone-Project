import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Calendar from "../models/Calendar.js";
import { createError } from "../utils/error.js";

export const createBookedDate = async (req, res, next) => {
  const userId = req.params.userid;
  const newUnavailableDate = new Calendar(req.body);

  try {
    const savedCalendar = await newUnavailableDate.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { unavailableDates: savedCalendar._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(newUnavailableDate);
  } catch (err) {
    next(err);
  }
};

export const updateBookedDate = async (req, res, next) => {
  try {
    const updatedDate = await Calendar.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDate);
  } catch (err) {
    next(err);
  }
};
export const updateCalendar = async (req, res, next) => {
  try {
    await Calendar.findByIdAndUpdate(
      { "UnavailableDates._id": req.params.id },
      {
        $push: {
          "UnavailableDates.$.bookedDates": req.body.dates
        },
      }
    );
    res.status(200).json("Booking has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteBookedDate = async (req, res, next) => {
  const userId = req.params.userid;
  try {
    await Calendar.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { bookedDates: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBookedDate = async (req, res, next) => {
  try {
    const bookedDate = await Calendar.findById(req.params.id);
    res.status(200).json(bookedDate);
  } catch (err) {
    next(err);
  }
};
export const getBookedDates = async (req, res, next) => {
  try {
    const bookedDates = await Calendar.find();
    res.status(200).json(bookedDates);
  } catch (err) {
    next(err);
  }
};