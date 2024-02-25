const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
// const middlewareUpload = require("../middleware/updoadImage");

const DinhesController = require("../controllers/DishesController");

const dishesController = new DinhesController();

const dishesRoutes = Router();

dishesRoutes.use(ensureAuthenticated);
const upload = multer(uploadConfig.MULTER);

dishesRoutes.post("/", upload.single("image"), dishesController.create);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.put("/:id", upload.single("image"), dishesController.update);

module.exports = dishesRoutes;

