import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import config from "config";

const signUpJWTToken = async (payLoad) => {
    return jwt.sign(payLoad, config.get('JWT_SEC_KEY'));
}
export default signUpJWTToken
// // <-----------------------------------JWT-Token Generator--------------------------------------->
// export const signJwtToken = async (payload) => {
//   return JWT.sign(payload, config.get("JWT_SEC_KEY"));
// };

// // <--------------------------------------Password Encrypter-------------------------------------->
// export const passwordEncrypter = async (planPassword) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(planPassword, salt);
// };

// // <-------------------------------------Password Decrypter--------------------------------------->
// export const passwordDecrypter = async (encryptPassword, planPassword) => {
//   return bcrypt.compare(planPassword, encryptPassword);
// };
