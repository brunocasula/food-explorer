const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UsersValidatedController = require("../controllers/UsersValidatedController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersController = new UsersController();
const usersValidatedController = new UsersValidatedController();

const userRoutes = Router();

userRoutes.post("/", usersController.create);
userRoutes.get("/validated", ensureAuthenticated, usersValidatedController.index);
userRoutes.get("/", usersController.show);

module.exports = userRoutes;