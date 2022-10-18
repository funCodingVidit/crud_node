import {
  studentFeesService,
  studentResultService,
  getStudentService,
  deleteStudentService
} from "../services/index.js";

// <----------------------------------Student Fees Controller-------------------------------------->
export const studentFeesController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentFees = await studentFeesService(studentId);
    res.status(200).json({
      studentFees,
    });
  } catch (error) {
    throw error;
  }
};

// <-----------------------------------Student Result Controller------------------------------------>
export const studentResultController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentResult = await studentResultService(studentId);
    res.status(200).json({
      studentResult,
    });
  } catch (error) {
    throw error;
  }
};

export const getStudentController = async (req, res) => {
  try {
    const studentData = await getStudentService();
    res.status(200).json({
      studentData,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteStudentController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    await deleteStudentService(studentId);
    res.status(200).json({
      message: "Student deleted",
    });
  } catch (error) {
    throw error;
  }
};
