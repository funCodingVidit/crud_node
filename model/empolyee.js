import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,

  },
  password: {
    type: String,
    required: true,
  },
  assignmentIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment'
  }]
});

export default mongoose.model("Employee", employeeSchema);
