import { Router } from "express";
// import studentRoutes from "./student.route.js";
import employeeRoutes from "./employee.route.js";
import authRoutes from "./auth.route.js";
import studentRoutes from "./student.route.js";

const router = Router();

// <-------------------------------Use All The Routes Present In V1------------------------------------------>
router.use("/v1", authRoutes, employeeRoutes, studentRoutes);

export default router;
