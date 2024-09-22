import express from "express";
import * as UserController from "../Controllers/userController";

const router = express.Router();

router.get("/users", UserController.GetUserDetail);

export default router;
