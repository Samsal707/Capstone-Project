import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: [{type: {String}}],
    phone: {
      type: String,
  
    },
    catnames: [{type: String}],
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    bookings: [{bookedDates:[{type: Date}]}],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);