exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.string("name").notNullable();
  table.text("description").default(null);
  table.string("category").notNullable();
  table.decimal("price").notNullable();
  table.text("image").default(null);
  table.integer("user_id").references("id").inTable("users");
  table.timestamp("created_at").default(knex.fn.now());
});

// JOIN
// table.integer("user_id").references("id").inTable("users")

exports.down = knex => knex.schema.dropTable("dishes");