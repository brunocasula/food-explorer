const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class FavoritesController {
  async create(request, response) {
    const { dish_id } = request.body;
    const user_id = request.user.id;

    const [id] = await knex("favorites").insert({
      user_id,
      dish_id,
    });

    const favorites = await knex("favorites")
      .select("dishes.*", "favorites.dish_id")
      .innerJoin("dishes", "dishes.id", "favorites.dish_id")
      .where("favorites.id", id);

    return response.status(201).json(...favorites);
  }

  async index(request, response) {
    const user_id = request.user.id;

    const favorites = await knex("favorites")
      .select("dishes.*", "favorites.dish_id")
      .innerJoin("dishes", "dishes.id", "favorites.dish_id")
      .where("favorites.user_id", user_id);

    return response.status(201).json(favorites);
  }

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;

    await knex("favorites")
      .where({ user_id, dish_id: id })
      .delete();

    return response.status(201).json();
  }

}

module.exports = FavoritesController;