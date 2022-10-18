import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  result: Object,
});

export default mongoose.model("Student", studentSchema);
