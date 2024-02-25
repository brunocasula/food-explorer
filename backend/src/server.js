require("express-async-errors");
require("dotenv/config");

const cors = require("cors");
const express = require("express");
const migrationsRun = require("./database/sqlite/migrations");
const updadConfig = require("./configs/upload");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const routes = require("./routes/");
const app = express();
const port = process.env.PORT || 3333;

migrationsRun();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true,
}));

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

// app.get("/message", (request, response) => {
//   return response.status(200).send("Hello word")
// })

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})