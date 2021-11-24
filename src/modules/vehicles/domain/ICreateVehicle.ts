import { IVehicle } from "./schema/IVehicle";

export interface ICreateVehicle extends Omit<IVehicle, "id" | "assigned"> {}
