import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Calendar from "../models/Calendar.js";
import { createError } from "../utils/error.js";

export const createBooking = async (req, res, next) => {
  const userId = req.params.userid;
  const newBooking = new Booking(req.body);
  

  try {
    const savedBooking = await newBooking.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { bookings: savedBooking._id },
      });
     
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};
export const updateCalendar = async (req, res, next) => {
  try {
    await Calendar.findByIdAndUpdate(
      { "bookedDates._id": req.params.id },
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
export const deleteBooking = async (req, res, next) => {
  const userId = req.params.userid;
  try {
    await Booking.findByIdAndDelete(req.params.id);

    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { booking: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};