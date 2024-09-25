import mysql,{RowDataPacket} from "mysql2/promise";
import env from "../env";
import express,{ Request, Response } from "express";
import {SelectQuery} from "../helpers/mysqlHelper";

import {User} from "../model/userModel";

const pool = mysql.createPool({
    host: env.MYSQLHOST_TEST,
    user: env.MYSQLUID,
    password: env.MYSQLPASSWORD,
    port: env.MYSQLPORT_TEST,
    database: "TradePlatform",
    rowsAsArray: true,
  });

const testMysqlQuery = async(req: Request, res: Response): Promise<void> => {
    try {
        const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User");
        //const userDetailArray:object[] = results;
        res.status(200).json(results);
      } catch (error) {
        throw error;
      }
};

const testMysqlQuery2 = async(req: Request, res: Response): Promise<void> => {
  try {
      const results = await SelectQuery("User",["Email"],["final978@gmail.com"]);
      res.status(200).json(results);
    } catch (error) {
      throw error;
    }
};

const router = express.Router();
router.get("/", testMysqlQuery);
router.get("/2", testMysqlQuery2);

export default router;
