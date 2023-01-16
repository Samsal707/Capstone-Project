import express from 'express'
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";
import bookingsRoute from "./routes/booking.js";
import calendarRoute from "./routes/calendar.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();

//set up mongodb connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//log when mongodb is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


//middlewares set up including routes
app.use(cors())
app.use(cookieParser())
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/booking", bookingsRoute);
app.use("/api/calendar", calendarRoute)



app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.listen(8800, () => {
  connect()
  console.log("Connected to backend.");
});