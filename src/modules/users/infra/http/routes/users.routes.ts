import { Router } from "express";
import { SignInUserController } from "../controllers/SignInUserController";
import { SignUpUserController } from "../controllers/SignUpUserController";

export const usersRouter = Router();

const signUpController = new SignUpUserController();
const signInController = new SignInUserController();

usersRouter.post("/signup", signUpController.handle);
usersRouter.post("/signin", signInController.handle);
