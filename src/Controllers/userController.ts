import { Request, Response } from 'express';

import * as UserService from '../services/userService';
import { ValidateRegisterData,ValidateUpdateData } from '../utility/validateData';
import generateID from '../utility/IDGenerater';

const GetAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetailArray = await UserService.GetAllUsers();

    if (userDetailArray.length === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.status(200).json(userDetailArray);
  } catch (error) {
    res.status(500).send('Error fetching user');
    console.error(error);
  }
};

const GetUserDetail = async (req: Request, res: Response): Promise<void> => {
  const UID = req.query.uid as string;
  if (!UID) {
    res.status(400).send('UID is required');
    return;
  }
  try {
    const userDetailObject = await UserService.GetUserDetail(UID);

    if (userDetailObject === undefined) {
      res.status(404).send('User not found');
      return;
    }
    res.status(200).json(userDetailObject);
  } catch (error) {
    res.status(500).send('Error fetching user');
    console.error(error);
  }
};

const Register = async (req: Request, res: Response): Promise<void> => {
  const validateResult = await ValidateRegisterData(req);
  if (typeof validateResult === 'string') {
    res.status(400).json(validateResult);
  } else {
    try {
      const uid = generateID('UID');
      const addUIDtovalidateResult = { UID: uid, ...validateResult };
      const result = await UserService.Register(addUIDtovalidateResult);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user', error });
    }
  }
};

const EditUser = async (req: Request, res: Response): Promise<void> => {
  const UID = req.query.uid as string;
  const validateResult = await ValidateUpdateData(req);
  if (typeof validateResult === 'string') {
    res.status(400).json(validateResult);
  } else {
    try {
      const result = await UserService.EditUser(validateResult,UID);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error editing user', error });
    }
  }
};

export { GetAllUsers, GetUserDetail, Register, EditUser };
