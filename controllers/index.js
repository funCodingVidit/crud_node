// <--------------------------------Import Auth Controllers----------------------------------------->
import { signUpController, logInController} from './auth.controller.js'

// <--------------------------------Import Student Controllers--------------------------------------->
import { getStudentController, studentFeesController, studentResultController, deleteStudentController} from './student.controller.js'

// <--------------------------------Import Employee Controllers-------------------------------------->


// <---------------------------------Export all the controllers--------------------------------------->

export {
  signUpController, logInController, getStudentController, studentFeesController, studentResultController, deleteStudentController
}