import employeeModel from "../model/empolyee.js";
import studentModel from "../model/student.js";
import signUpJWTToken from "../utils/authHelper.js";

// <---------------------------------------SignUp The Employee/Student----------------------------------->
export const signUpService = async (isEmployee, signUpInfo) => {
  try {
    // Schema for employee/student info
    const { password } = signUpInfo;

    // fetch the student store data
    isEmployee
      ? await employeeModel.create(signUpInfo)
      : await studentModel.create(signUpInfo);
    return true;
  } catch (error) {
    throw error;
  }
};

// <---------------------------------------LogIn The Employee/Student------------------------------------>

export const logInService = async (isEmployee, logInInfo) => {
  try {
    //const parsedEmployee = JSON.parse(logInInfo);
    const { email, password, studentId } = logInInfo;
    console.log(logInInfo);

    const user = isEmployee ? await employeeModel.findOne({email : email}):await studentModel.findOne({studentId : studentId});

    if(user) {
      if (password === user.password) {
        const token = isEmployee ? await signUpJWTToken(email) : await signUpJWTToken(studentId);
        console.log(token);
        return token;
      } else {
        return false;
      }
    } else {
      console.log("Error");
      return false;
    }
  } catch (error) {
    throw error;
  }
};
