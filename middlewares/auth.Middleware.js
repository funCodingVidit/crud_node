import JWT from "jsonwebtoken";
import config from "config";

// <---------------------------------Validate The Upcoming Student------------------------------------->
export const authValidation = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
      return res.status(404).json({
        message: "Sorry please provide the token",
      });
    }

    // Seperate the token from token string
    const token = bearerHeader.split(" ")[1];

    if (!bearerHeader || !token) {
      return res.status(404).json({
        message: "Sorry please provide the token",
      });
    }

    // Verify the jwt token
    JWT.verify(token, config.get("JWT_SEC_KEY"), (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid token",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    throw error;
  }
};
