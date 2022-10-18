import { Router } from "express";
import { signUpController, logInController } from "../controllers/index.js";

const router = Router();

// <-------------------------------------------SignUp The Student/Employee In DB----------------------------------->
router.post("/signup", signUpController);

// <-------------------------------------------LogIn The Student/Employee In DB------------------------------------>
router.post("/login", logInController);

export default router;
