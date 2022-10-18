import { logInService, signUpService } from "../services/index.js";

// <----------------------------------------------SignUp Controller-------------------------------------->
export const signUpController = async (req, res) => {
  try {
    const { isEmployee } = req.query;
    const convertedEmployee = Number(isEmployee);

    console.log(`isEmployee : ${Number(isEmployee)}`);
    const isDone  = await signUpService(convertedEmployee, req.body);

    const message = convertedEmployee ? "Employee signUp successfully" : "Student signUp successfully";

    if (isDone) {
    return res.status(200).json({
        message: message
      })
    } else {
     return res.sendStatus(404);
    }
  } catch (error) {
    throw error;
  }
};

// <----------------------------------------------Login Controller------------------------------------>
export const logInController = async (req, res) => {
  try {
    const { isEmployee }  = req.query;

    // Call the signUp service layer
    const token = await logInService(Number(isEmployee), req.body);
    //console.log(token);

    if (!token) {
      return res.status(404).json({
        message: "Invalid details",
      });
    }
    res.status(200).json({
      message: "User logIn successfully!",
      token:`Bearer ${token}`,
    });
  } catch (error) {
    throw error;
  }
};
