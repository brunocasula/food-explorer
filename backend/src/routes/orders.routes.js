const { Router } = require("express");

const OrdersController = require("../controllers/OrdersController");
const ordersController = new OrdersController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const ordersRoutes = Router();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.get("/", ordersController.index);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.get("/:id", ordersController.show);
ordersRoutes.delete("/:id", ordersController.delete);
ordersRoutes.put("/", ordersController.update);

module.exports = ordersRoutes;