import { Router } from "express";
import { usersRouter } from "../../../../modules/users/infra/http/routes/users.routes";

export const apiRoutes = Router();

apiRoutes.use("/users", usersRouter);
