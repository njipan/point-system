require("dotenv").config();
const mysql = require("mysql");
const migration = require("mysql-migrations");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

migration.init(pool, __dirname + "/migrations");
