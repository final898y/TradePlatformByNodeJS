import express from "express";
import UserController from "../Controllers/userController";

const router = express.Router();

router.get("/users", UserController.GetUserDetail);

export default router;
