import { Request, Response } from "express";
import pool from "../src/database/mysql"

const getAllUsers = (req: Request, res: Response): void => {
  res.send("Return all users");
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const UID = req.query.uid as string;
  try {
    const [rows] = await pool.query("SELECT * FROM User WHERE UID = ?", [UID]);

    if ((rows as any[]).length === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.json(rows);
  } catch (error) {
    res.status(500).send("Error fetching user");
    console.error(error);
  }
};

// 將所有方法打包成一個默認導出
export default {
  getAllUsers,
  getUserById,
};