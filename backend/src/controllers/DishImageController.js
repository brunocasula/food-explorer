const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishImageController {

  async update(request, response) {
    const dish_id = request.dish.id;
    const imageFilename = request.file?.filename;

    const diskStorage = new DiskStorage();

    const dish = await knex("dishes")
      .where({ id: dish_id }).first();

    if (!dish) {
      throw new AppError("Somente usuários autenticados podem mudar o avatar!", 401);
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFilename)
    dish.image = filename;

    await knex("dishes").update(dish).where({ id: dish.id });

    return response.json(dish);
  }
}

module.exports = DishImageController;