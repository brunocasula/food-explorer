const { request, Router, response } = require("express");

const sessionRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const dishesRoutes = require("./dishes.routes");
const ordersRoutes = require("./orders.routes");
const favoritesRoutes = require("./favorites.routes");

const routes = Router();
routes.use("/sessions", sessionRoutes);
routes.use("/users", usersRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/orders", ordersRoutes);
routes.use("/favorites", favoritesRoutes);

module.exports = routes;


