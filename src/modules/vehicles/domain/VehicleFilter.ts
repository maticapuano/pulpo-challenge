import { IVehicle } from "./schema/IVehicle";

export type VehicleFilter = Partial<Record<keyof IVehicle, any>>;
