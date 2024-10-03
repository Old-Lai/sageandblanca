const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

//PostgreSQL client config
const pool = new Pool({
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGDATABASE: process.env.PGDATABASE,
  PGPORT: process.env.PGPORT,
});

module.exports = pool;