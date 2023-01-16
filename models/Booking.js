import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(



 {
    name: {
      type: String,
      required: true,
    },

    catnames:[{ type: String }],
    services:[{service: String, price: Number , quantity:Number}],

    bookedDates:{ type:[Date],
    required: true,
    },

    message: {
      type: String,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);