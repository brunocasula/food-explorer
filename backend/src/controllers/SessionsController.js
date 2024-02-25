const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");

class SessionsController {
  async create(request, response) {

    const { email, password } = request.body;

    const user = await knex("users").select(["id", "name", "email", "role", "password"]).where({ email }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreto!", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreto!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = await sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn
    });

    response.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60 * 1000, // 60 min valid cookie token 
    })

    delete (user.password);

    return response.status(201).json({ user })
  }
}

module.exports = SessionsController;