const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkUserExists = await knex("users").where({ email });

    if (checkUserExists.length > 0) {
      throw new AppError("Este e-mail já está em uso!");
    }

    if (password.length < 6) {
      throw new AppError("Informe a senha no mínimo 6 caracteres!");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({ name, email, password: hashedPassword });

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.query;

    const user = await knex("users").select(["id", "name", "email", "role"]).where({ id }).first();

    return response.json(user);
  }
}

module.exports = UsersController;