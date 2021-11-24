import { Router } from "express";
import { isAuthenticated } from "../../../../users/infra/http/middlewares/is-authenticated";
import { GetAllVehiclesController } from "../controllers/GetAllVehiclesController";

export const vehiclesRouter = Router();

vehiclesRouter.use(isAuthenticated);

const getAllVehiclesController = new GetAllVehiclesController();

vehiclesRouter.get("/", isAuthenticated, getAllVehiclesController.handle);
