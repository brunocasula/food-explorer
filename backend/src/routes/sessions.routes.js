const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

// const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const sessionsRoutes = Router();
// sessionsRoutes.use(ensureAuthenticated);
sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;