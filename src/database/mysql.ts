import mysql from "mysql2/promise";
import env from "../env";

const pool = mysql.createPool({
  host: env.MYSQLHOST,
  user: env.MYSQLUID,
  password: env.MYSQLPASSWORD,
  port: env.MYSQLPORT,
  database: "TradePlatform"
});

export default pool;
