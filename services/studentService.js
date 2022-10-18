import { fileReader } from "../utils/filereader.js";
import mongoose from "mongoose";
import studentSchema from "../model/student.js"

// <---------------------------------------Student Fees Service----------------------------------->
export const studentFeesService = async (studentId) => {
  try {
    console.log(studentId);
    const studentInfo = await studentSchema.findById({_id: studentId});
    console.log(`studentInfo ${studentInfo}`)
    const fees = studentInfo.fees;

    return fees;

  } catch (error) {
    throw error;
  }
};

// <---------------------------------------Student Result Service--------------------------------->
export const studentResultService = async (studentId) => {
  try {
    const studentInfo = await studentSchema.findById({_id: studentId});
    return studentInfo.result;
  } catch (error) {
    throw error;
  }
};

export const getStudentService = async () => {
  try {
    const student = await studentSchema.find();
    return student;
  } catch (error) {
    throw error;
  }
}

export const deleteStudentService = async (studentId) => {
  try {
    const id = studentId;
    console.log(`>>>>> ${id}`);
    return await studentSchema.findByIdAndRemove({_id: id});
  } catch (error) {
    throw error;
  }
}
