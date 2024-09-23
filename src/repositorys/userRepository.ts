import mysql,{RowDataPacket} from "mysql2/promise";
import env from "../env";
import {User} from "../model/userModel";


const pool = mysql.createPool({
  host: env.MYSQLHOST_TEST,
  user: env.MYSQLUID,
  password: env.MYSQLPASSWORD,
  port: env.MYSQLPORT_TEST,
  database: "TradePlatform"
});

async function GetUserDetail(UID: string): Promise<RowDataPacket[]> {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User WHERE UID = ?", [UID]);
    return results;
  } catch (error) {
    throw error;
  }
}

async function Register(RegisterData: User): Promise<RowDataPacket[]> {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User WHERE UID = ?", [RegisterData.UID]);
    return results;
  } catch (error) {
    throw error;
  }
}

export {
  pool,
  GetUserDetail,
  Register
};
