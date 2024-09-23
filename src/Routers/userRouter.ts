import express from "express";
import * as UserController from "../controllers/userController";

const router = express.Router();

router.get("/search", UserController.GetUserDetail);
router.get("/register", (req, res) => {
    res.render("register");
  });

router.post("/register", UserController.Register);


export default router;
