exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id");
  table.string("name").notNullable();
  table.string("email").notNullable();
  table.string("password").notNullable();
  table.string("avatar").default(null);
  table.enum("role", ["admin", "customer"], { useNative: true, enumName: "roles" }).notNullable().default("customer");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

// JOIN
// table.integer("user_id").references("id").inTable("users")

exports.down = knex => knex.schema.dropTable("users");