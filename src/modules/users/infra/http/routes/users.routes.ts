import { Router } from "express";
import { SignUpUserController } from "../controllers/SignUpUserController";

export const usersRouter = Router();

const signUpController = new SignUpUserController();

usersRouter.post("/signup", signUpController.handle);
