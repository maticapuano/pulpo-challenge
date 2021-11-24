import { Router } from "express";
import { isAuthenticated } from "../../../../users/infra/http/middlewares/is-authenticated";
import { GetAllVehiclesController } from "../controllers/GetAllVehiclesController";
import { GetByIdVehicleController } from "../controllers/GetByIdVehicleController";

export const vehiclesRouter = Router();

vehiclesRouter.use(isAuthenticated);

const getAllVehiclesController = new GetAllVehiclesController();
const getVehiclesById = new GetByIdVehicleController();

vehiclesRouter.get("/", getAllVehiclesController.handle);
vehiclesRouter.get("/:id", getVehiclesById.handle);
