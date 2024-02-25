const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(request, response) {
    const { name, category, price, description, ingredients } = request.body;
    const imageFileName = request.file ? request.file.filename : "";
    const user_id = request.user.id;

    const DishExists = await knex("dishes").where({ name }).first();

    if (DishExists) {
      throw new AppError("Este prato já existe no cardápio.")
    }

    const diskStorage = new DiskStorage()
    const filename = imageFileName ? await diskStorage.saveFile(imageFileName) : null;

    const [dish_id] = await knex("dishes").insert({
      name,
      category,
      price,
      description,
      image: filename,
      user_id
    });

    const ingredientsArray = JSON.parse(ingredients || '[]');

    const ingredientsInsert = ingredientsArray.map(name => {
      return {
        name,
        dish_id
      }
    })

    await knex("ingredients").insert(ingredientsInsert);

    return response.json();
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, category, price, description, ingredients } = request.body;
    const imageFilename = request.file?.filename;

    const dish = await knex("dishes").where({ id }).first();

    if (!dish) {
      throw new AppError("Prato não encontrado.", 404);
    }

    const dishUpdate = {
      name: name ?? dish.name,
      category: category ?? dish.category,
      price: price ?? dish.price,
      description: description ?? dish.description,
      // image: fileName ?? dish.image,
      // updated_by: request.user.id,
      // updated_at: knex.fn.now(),
    };

    if (imageFilename) {
      const diskStorage = new DiskStorage();

      if (dish.image) {
        await diskStorage.deleteFile(dish.image);
      }

      const filename = await diskStorage.saveFile(imageFilename);
      dishUpdate.image = filename;
    }

    const ingredientsArray = JSON.parse(ingredients || '[]');

    const ingredientsInsert = ingredientsArray.map(name => {
      return {
        name,
        dish_id: id
      }
    });

    await knex("ingredients").where({ dish_id: id }).delete();
    await knex("ingredients").where({ dish_id: id }).insert(ingredientsInsert);

    await knex("dishes").where({ id }).update(dishUpdate);

    return response.status(201).json('Prato atualizado com sucesso')
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { search } = request.query;

    let dishes, ingredients;

    if (search) {

      dishes = await knex("dishes")
        .distinct()
        .select([
          "dishes.id",
          "dishes.name",
          "dishes.category",
          "dishes.price",
          "dishes.description",
          "dishes.image",
        ])

        .leftJoin("ingredients", "ingredients.dish_id", "dishes.id")
        .whereLike("dishes.name", `%${search}%`)
        .orWhereLike("ingredients.name", `%${search}%`)
        .orderBy("dishes.name");

      ingredients = await knex("ingredients")
        .distinct()
        .select([
          "ingredients.id",
          "ingredients.name",
          "ingredients.dish_id",
        ])
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .whereLike("ingredients.name", `%${search}%`)
        .orWhereLike("dishes.name", `%${search}%`);

    }
    else {

      dishes = await knex("dishes")
        .select([
          "dishes.id",
          "dishes.name",
          "dishes.category",
          "dishes.price",
          "dishes.description",
          "dishes.image",
        ])
        .orderBy("dishes.name");

      ingredients = await knex("ingredients")
        .select([
          "ingredients.id",
          "ingredients.name",
          "ingredients.dish_id",
        ]);

    }

    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredients = ingredients.filter(ingredient => ingredient.dish_id === dish.id)

      return {
        ...dish,
        ingredients: dishIngredients
      }

    })

    return response.json(dishesWithIngredients);

  }

  async show(request, response) {

    const { id } = request.params;

    const dishes = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

    return response.json({
      ...dishes,
      ingredients
    })

  }
}

module.exports = DishesController;