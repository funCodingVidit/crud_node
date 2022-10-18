import {
  getAssignmentsService,
  postAssignmentService,
} from "../services/index.js";
import { fileReader } from "../utils/filereader.js";

// <------------------------------------Get Employee Assignment Controller------------------------------------->
export const getAssignmentsController = async (req, res) => {
  try {
    const empId  = req.params.id;

    const assignmentDetails = await getAssignmentsService(empId);

    res.status(200).json({
      assignmentDetails
    });
  } catch (error) {
    throw error;
  }
};

// <------------------------------------Post Employee Assignment Controller------------------------------------>
export const postAssignmentController = async (req, res) => {
  try {
    const employeeId = req.params.id;
    console.log(employeeId);

    await postAssignmentService(employeeId, req.body);
    res.status(200).json({
      message: `New assignment successfully added to employeeId ${employeeId}`,
      assignmentData: req.body
    });
  } catch (error) {
    throw error;
  }
};

export const getAssignmentByIdController = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const assignmentId = req.params.assignmentId;
    console.log(`Employee id: ${employeeId}, Assignment id: ${assignmentId}`);

    
  } catch (error) {
    
  }
}
