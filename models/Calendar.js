import mongoose from "mongoose";
const CalendarSchema = new mongoose.Schema(


 {
    name: { type: String},

    catname: {type: String},

    unavailableDates: [{bookedDate: Date}],
    
  },
  { timestamps: true }
);

export default mongoose.model("Calendar", CalendarSchema);