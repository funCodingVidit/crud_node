import mongoose  from "mongoose";

var assignmentSchema = new mongoose.Schema({
    assignmentName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["finished", "pending"],
        required: true
    }
})

export default mongoose.model("Assignment", assignmentSchema);