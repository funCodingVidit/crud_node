import employeeSchema from '../model/empolyee.js';
import assignmentSchema from '../model/assignment.js';


// <-------------------------------------Get Employee Assignment By employeeId---------------------->
export const getAssignmentsService = async (employeeId) => {
  try {
    //const employeInfo = await fileReader(true);
    const employeeData = await employeeSchema.findById({_id : employeeId}).populate('assignmentIds');
    const assignments = employeeData.assignmentIds;
    return assignments;
  } catch (error) {
    throw error;
  }
};

// <-------------------------------------Post Employee Assignment By EmployeeID----------------------->
export const postAssignmentService = async (employeeId, newAssignment) => {
  try {

    const assignmnent = await assignmentSchema.create(newAssignment);
    console.log(assignmnent);
    const employeeData = await employeeSchema.findById({_id: employeeId});
    employeeData.assignmentIds.push(assignmnent._id);
    //employeeSchema.create(data);

    employeeData.save()
    console.log(employeeData);
    return;
  } catch (error) {
    throw error;
  }
};
