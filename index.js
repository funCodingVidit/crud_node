import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import config from 'config';
import serverRoutes from "./routes/index.js";

// Create the express app
const app = express();

// Use middlewares
app.use(morgan("dev"));
app.use(express.json());

// Log the api call on server
app.use((req, res, next) => {
  const apiInfo = `${req.method}  ${res.statusCode}  ${req.url}`;
  console.log(`API HIT ${apiInfo}`, `\n|\nv\n|\nv\n|\nv`);
  next();
});


// Fetch the servee port
const PORT = config.get('PORT')|| 3001;

app.use("/api", serverRoutes);

// This should be the last route else any after it wont work
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This route not present on server",
  });
});

// Handling the other errors
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: {
      statusCode: err.statusCode || 500,
      message: "Server error",
    },
  });
});

// Mongoose connection
const uri_string = config.get('DB_URL');
mongoose.connect(uri_string)
  .then(() => {
    console.log("DB connection established");
  }).catch((err) => {
    console.log(`Connection failed due to ${err.message}`);
  });

// Listening the port
app.listen(PORT, () => {
  console.log(`===========Server up on port ${PORT}============`, `\n`);
});
