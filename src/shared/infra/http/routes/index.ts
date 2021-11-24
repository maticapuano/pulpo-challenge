import { Router } from "express";
import { usersRouter } from "../../../../modules/users/infra/http/routes/users.routes";
import { vehiclesRouter } from "../../../../modules/vehicles/infra/http/routes/vehicles.routes";

export const apiRoutes = Router();

apiRoutes.use("/users", usersRouter);
apiRoutes.use("/vehicles", vehiclesRouter);
