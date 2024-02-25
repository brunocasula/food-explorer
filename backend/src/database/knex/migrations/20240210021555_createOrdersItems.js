exports.up = knex => knex.schema.createTable("orders_items", table => {
  table.increments("id");
  table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");
  table.integer("dish_id").references("id").inTable("dishes");
  table.string("name", 50).notNullable();
  table.decimal("price", 10, 2).notNullable();
  table.integer("quantity").notNullable();
  table.decimal("total_price", 10, 2).notNullable();
});

exports.down = knex => knex.schema.dropTable("orders_items");