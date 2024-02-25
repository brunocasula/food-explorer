const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class OrdersController {
  async create(request, response) {
    const { status, total_price, payment_method, orders_items } = request.body;
    const user_id = request.user.id;

    //status 01 - pending | 02 - preparing | 03 - delivered | 04 - canceled
    //payment_method 01 - Pix | 02 - credit

    const [order_id] = await knex("orders").insert({
      status,
      total_price,
      payment_method,
      user_id,
    });

    const itemsInsert = orders_items.map(order => {
      const { id: dish_id, name, price, quantity, total_price } = order;

      return {
        order_id,
        dish_id,
        name,
        price,
        quantity,
        total_price
      };
    });

    await knex("orders_items").insert(itemsInsert);

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const order = await knex("orders").where({ id }).first();
    const orders_items = await knex("orders_items")
      .where({ order_id: id })
      .orderBy("name");

    return response.status(201).json({
      ...order,
      orders_items
    });
  }

  // async update(request, response) {
  //   const { id } = request.params;
  //   const { status, total_price, payment_method } = request.body;

  //   const order = await knex("orders").where({ id }).first();

  //   const orderUpdate = {
  //     status: status ?? order.status,
  //     total_price: total_price ?? order.total_price,
  //     payment_method: payment_method ?? order.payment_method,
  //   };

  //   await knex("orders").where({ id }).update(orderUpdate);

  //   return response.status(201).json();
  // }

  async update(request, response) {
    const { id, status } = request.body;

    await knex("orders").update({ status }).where({ id })

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("orders").where({ id: id }).delete();

    return response.json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    const user = await knex("users").where({ id: user_id }).first();
    const isAdmin = user.role === "admin";

    let orders;

    if (isAdmin) {
      orders = await knex("orders")
        .select([
          "orders.id",
          "orders.status",
          "orders.total_price",
          "orders.payment_method",
          "orders.user_id",
          "users.name AS user_name",
          "orders.created_at",
        ])
        .innerJoin("users", "users.id", "orders.user_id")
        .orderBy("orders.created_at", "desc");
    } else {
      orders = await knex("orders")
        .select([
          "orders.id",
          "orders.status",
          "orders.total_price",
          "orders.payment_method",
          "orders.created_at",
        ])
        .where({ user_id })
        .orderBy("orders.created_at", "desc");
    }

    const ordersDishes = await knex("orders_items");

    const ordersWithDishes = orders.map((order) => {
      const orderDishes = ordersDishes.filter((dish) => dish.order_id === order.id);
      const filteredDishes = isAdmin ? orderDishes : orderDishes.map(({ name, quantity }) => ({ name, quantity }));

      return {
        ...order,
        dishes: filteredDishes,
      };
    });

    return response.status(200).json(ordersWithDishes);
  }
}

module.exports = OrdersController;