import { IVehicle } from "./schema/IVehicle";

export type UpdateVehicle = (Partial<IVehicle> & { id: string }) | IVehicle;
