import { ICreateVehicle } from "../ICreateVehicle";
import { IVehicle } from "../schema/IVehicle";
import { UpdateVehicle } from "../UpdateVehicle";
import { VehicleFilter } from "../VehicleFilter";

export interface IVehiclesRepository {
  findAll(filter?: VehicleFilter): Promise<IVehicle[]>;
  findById(id: string): Promise<IVehicle | undefined>;
  create(vehicle: ICreateVehicle): Promise<IVehicle>;
  save(vehicle: UpdateVehicle): Promise<IVehicle>;
  delete(id: string): Promise<void>;
}
