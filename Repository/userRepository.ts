import mysql from "mysql2/promise";
import env from "../src/env";
import userModel from "../src/model/userModel"

const pool = mysql.createPool({
  host: env.MYSQLHOST_TEST,
  user: env.MYSQLUID,
  password: env.MYSQLPASSWORD,
  port: env.MYSQLPORT_TEST,
  database: "TradePlatform"
});

async function GetUserDetail(UID: string): Promise<userModel[]> {
  try {
    const [results, fields] = await pool.query<userModel[]>("SELECT * FROM User WHERE UID = ?", [UID]);
    return results;
  } catch (error) {
    throw error;
  }
}

export {
  pool,
  GetUserDetail
};
