import { ICreateVehicle } from "../ICreateVehicle";
import { IVehicle } from "../schema/IVehicle";
import { UpdateVehicle } from "../UpdateVehicle";

export interface IVehiclesRepository {
  findAll(): Promise<IVehicle[]>;
  findById(id: string): Promise<IVehicle | undefined>;
  create(vehicle: ICreateVehicle): Promise<IVehicle>;
  save(vehicle: UpdateVehicle): Promise<IVehicle>;
  delete(id: string): Promise<void>;
}
