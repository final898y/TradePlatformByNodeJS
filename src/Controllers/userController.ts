import { Request, Response } from "express";
import * as UserService from "../services/userService";
import * as userModel from "../model/userModel";

const GetAllUsers = async(req: Request, res: Response): Promise<void> => {
  try {
    const userDetailArray = await UserService.GetAllUsers();

    if (userDetailArray.length === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(userDetailArray);
  } catch (error) {
    res.status(500).send("Error fetching user");
    console.error(error);
  }
};

const GetUserDetail = async (req: Request, res: Response): Promise<void> => {
  const UID = req.query.uid as string;
  if (!UID) {
    res.status(400).send("UID is required");
    return;
  }
  try {
    const userDetailObject = await UserService.GetUserDetail(UID);

    if (userDetailObject === null) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(userDetailObject);
  } catch (error) {
    res.status(500).send("Error fetching user");
    console.error(error);
  }
};

const Register = async (req: Request, res: Response): Promise<void> => {
  const postdata = await userModel.UserSchema.safeParseAsync(req.body);
  if (!postdata.success) {
    res.send(postdata.error) ;
  } else {
    const registerData : userModel.User = postdata.data
    const results = await UserService.Register(registerData);
  }
};

export {
  GetAllUsers,
  GetUserDetail,
  Register
};