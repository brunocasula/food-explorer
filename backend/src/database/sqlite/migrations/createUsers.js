const createUsers = `
  CREATE TABLE IF NOT EXISTS users (   
    id integer not null primary key autoincrement,
    name varchar(255) not null not null,
    email varchar(255) not null not null,
    password varchar(255) not null not null,
    avatar varchar(255) not null default null,
    role text check (role in ('admin', 'customer')) not null default 'customer',
    created_at datetime default CURRENT_TIMESTAMP,
    updated_at datetime default CURRENT_TIMESTAMP
  );
`;

module.exports = createUsers;