import { Router } from "express";
import { isAuthenticated } from "../../../../users/infra/http/middlewares/is-authenticated";
import { CreateVehicleController } from "../controllers/CreateVehicleController";
import { DeleteVehicleController } from "../controllers/DeleteVehicleController";
import { GetAllVehiclesController } from "../controllers/GetAllVehiclesController";
import { GetByIdVehicleController } from "../controllers/GetByIdVehicleController";
import { UpdateVehicleController } from "../controllers/UpdateVehicleController";

export const vehiclesRouter = Router();

vehiclesRouter.use(isAuthenticated);

const getAllVehiclesController = new GetAllVehiclesController();
const getVehiclesById = new GetByIdVehicleController();
const updateVehicleController = new UpdateVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const createVehicle = new CreateVehicleController();

vehiclesRouter.get("/", getAllVehiclesController.handle);
vehiclesRouter.get("/:id", getVehiclesById.handle);
vehiclesRouter.put("/:id", updateVehicleController.handle);
vehiclesRouter.delete("/:id", deleteVehicleController.handle);
vehiclesRouter.post("/", createVehicle.handle);
