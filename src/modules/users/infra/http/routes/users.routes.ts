import { Router } from "express";
import { GetCurrentUserController } from "../controllers/GetCurrentUserController";
import { SignInUserController } from "../controllers/SignInUserController";
import { SignUpUserController } from "../controllers/SignUpUserController";
import { isAuthenticated } from "../middlewares/is-authenticated";

export const usersRouter = Router();

const signUpController = new SignUpUserController();
const signInController = new SignInUserController();
const currentUserController = new GetCurrentUserController();

usersRouter.post("/signup", signUpController.handle);
usersRouter.post("/signin", signInController.handle);
usersRouter.get("/me", isAuthenticated, currentUserController.handle);
