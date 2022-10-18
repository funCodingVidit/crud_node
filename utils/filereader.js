import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studentFilePath = `${path.join(__dirname, "../Db/student.json")}`;
const employeeFilePath = `${path.join(__dirname, "../Db/employee.json")}`;

// fileReader is used to read the data from json files
export const fileReader = async (isEmployee) => {
  return isEmployee 
    ? fs.readFileSync(employeeFilePath, "utf-8")
    : fs.readFileSync(studentFilePath, "utf-8");
};

//  fileWriter is used to write the data in json files
export const fileWriter = async (fileData, isEmployee) => {
  isEmployee
    ? fs.writeFileSync(employeeFilePath, fileData)
    : fs.writeFileSync(studentFilePath, fileData);
};
