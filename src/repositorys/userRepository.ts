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

async function GetAllUsers(): Promise<object[]> {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User");
    const userDetailArray:object[] = results;
    return userDetailArray;
  } catch (error) {
    throw error;
  }
}

async function GetUserDetail(UID: string): Promise<object> {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User WHERE UID = ?", [UID]);
    const userDetailObject: object  =  results[0];
    return userDetailObject;
  } catch (error) {
    throw error;
  }
}

async function Register(RegisterData: User): Promise<string> {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User WHERE UID = ?", [RegisterData.UID]);
    return "";
  } catch (error) {
    throw error;
  }
}

export {
  pool,
  GetAllUsers,
  GetUserDetail,
  Register
};
