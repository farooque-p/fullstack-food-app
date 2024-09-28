import express from "express";
import { login, register } from "../controllers/user.controller.js";

const userRouter = express.Router();

// Routes
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
