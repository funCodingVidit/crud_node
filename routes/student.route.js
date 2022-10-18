import { Router } from "express";
import { getStudentController, studentFeesController, studentResultController, deleteStudentController } from "../controllers/student.controller.js"
import { authValidation } from "../middlewares/auth.Middleware.js";

const router = Router();

// // <------------------------------------------Get Student Fees-------------------------------------->
router.get("/student/:studentId/fees", authValidation, studentFeesController);

// // <------------------------------------------Get Student Result------------------------------------>
router.get("/student/:studentId/result", authValidation, studentResultController)

// <---------------------------------------------Get Student data-------------------------------------->
router.get("/student", authValidation, getStudentController);

// <---------------------------------------------Delete a student-------------------------------------->
router.delete("/student/:studentId/delete", authValidation, deleteStudentController);

export default router;
