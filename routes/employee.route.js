// import { Router } from "express";

import { Router } from 'express';

import { postAssignmentController, getAssignmentsController, getAssignmentByIdController } from '../controllers/employee.controller.js';
import { authValidation} from '../middlewares/auth.Middleware.js';

const router = Router();

//<--------------------------------Post New Assignment To EmployeeID----------------------------------->
router.post('/employee/:id/add/assignment', authValidation, postAssignmentController);
router.get('/employee/:id/getAssignments', authValidation, getAssignmentsController);
router.get('/employee/:id/getAssignment/:assignmentId', authValidation, getAssignmentByIdController);

// // <-------------------------------- Get Assignment Details BY EmployeeID------------------------------->
// router.get("/emp/:empId/assignments", authValidation, getAssignmentsController);

export default router;
