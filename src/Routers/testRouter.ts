import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import env from '../env';
import express, { Request, Response } from 'express';
import { SelectQuery, InsertQuery,UpdateQuery } from '../helpers/mysqlHelper';
import { ValidateRegisterData, ValidateUserData,ValidateUpdateData} from '../utility/validateData';
import generateID from '../utility/IDGenerater';
import { z } from 'zod';

import * as userModel from '../model/userModel';

const pool = mysql.createPool({
  host: env.MYSQLHOST_TEST,
  user: env.MYSQLUID,
  password: env.MYSQLPASSWORD,
  port: env.MYSQLPORT_TEST,
  database: 'TradePlatform',
  rowsAsArray: true,
});

const testZOD = async (req: Request, res: Response): Promise<void> => {
  const validateResult = await ValidateRegisterData(req);
  if (typeof validateResult === 'string') {
    res.status(400).json(validateResult);
  } else {
    res.status(200).json(validateResult);
  }
};

const testMysqlSelectAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const [results, fields] = await pool.query<RowDataPacket[]>('SELECT * FROM User');
    //const userDetailArray:object[] = results;
    res.status(200).json(results);
  } catch (error) {
    throw error;
  }
};

const testMysqlSelect = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await SelectQuery(
      'User',
      ['MobilePhone', 'Email'],
      ['0912345678', 'fnal978@gmail.com'],
    );
    const a = results[0];
    const validateResult = await ValidateUserData(a)
    if (typeof validateResult === 'string') {
      res.status(400).json(validateResult);
    } else {
      res.status(200).json(validateResult.Name);
    }
  } catch (error) {
    throw error;
  }
};

const testMysqlInsert = async (req: Request, res: Response): Promise<void> => {
  const validateResult = await ValidateRegisterData(req);
  if (typeof validateResult === 'string') {
    res.status(400).json(validateResult);
  } else {
    try {
      // const results = await pool.query<ResultSetHeader>(`
      //   INSERT INTO User
      //   (
      //     UID, Name, MobilePhone, Email, Password,
      //     Birthday, Address, StoreName
      //   )
      //   VALUES
      //   (
      //     "testUID3", "testName", "0981646000", "testEmail", "testPassword",
      //     "1994-04-16", "testAddress", "testStoreName"
      //   )
      // `);
      const filterField = [
        'UID',
        'Name',
        'MobilePhone',
        'Email',
        'Password',
        'Birthday',
        'Address',
        'StoreName',
      ];
      const uid = generateID('UID');
      const filterValue = [
        uid,
        validateResult.Name,
        validateResult.MobilePhone,
        validateResult.Email,
        validateResult.Password,
        validateResult.Birthday,
        validateResult.Address,
        validateResult.StoreName,
      ];
      const result = await InsertQuery('User', filterField, filterValue);
      if (result.affectedRows === 1) {
        res.status(200).json('註冊成功');
      }
    } catch (error) {
      throw error;
    }
  }
};

const testMysqlUpdate = async (req: Request, res: Response): Promise<void> => {
  const validateResult = await ValidateUpdateData(req);
  if (typeof validateResult === 'string') {
    res.status(400).json(validateResult);
  } else {
    try {
      const updateField = ['Name', 'MobilePhone','Email', 'BirthDay', 'Address', 'StoreName']

      const uid = 'UID2024080817555212345678';
      const updateAndFilterValue = [
        validateResult.Name,
        validateResult.MobilePhone,
        validateResult.Email,
        validateResult.Birthday,
        validateResult.Address,
        validateResult.StoreName,
        uid
      ];
      const definedProperties:string[] = (Object.keys(validateResult) as (keyof typeof validateResult)[])
      .filter(key => validateResult[key] !== undefined);
      res.status(200).json(definedProperties);
      // const results = await UpdateQuery('User', updateField, updateAndFilterValue,'UID');
      // if (results.affectedRows === 1) {
      //   res.status(200).json('成功');
      // }
      // else{
      //   res.status(400).json(results)
      // }
    } catch (error) {
      throw error;
    }
  }
};

const router = express.Router();
router.get('/selectall', testMysqlSelectAll);
router.get('/select', testMysqlSelect);
router.post('/insert', testMysqlInsert);
router.get('/zod', testZOD);
router.put('/edit', testMysqlUpdate);

export default router;
