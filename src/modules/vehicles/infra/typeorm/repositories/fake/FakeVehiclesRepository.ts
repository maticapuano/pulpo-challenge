import { ICreateVehicle } from "../../../../domain/ICreateVehicle";
import { IVehiclesRepository } from "../../../../domain/repositories/IVehiclesRepository";
import { IVehicle } from "../../../../domain/schema/IVehicle";
import { UpdateVehicle } from "../../../../domain/UpdateVehicle";
import { v4 } from "uuid";
import { VehicleEntity } from "../../entities/Vehicle.entity";

export class FakeVehiclesRepository implements IVehiclesRepository {
  private vehicles: IVehicle[] = [];

  public async findAll(): Promise<IVehicle[]> {
    return new Promise((resolve) => resolve(this.vehicles));
  }

  public async findById(id: string): Promise<IVehicle | undefined> {
    const result = this.vehicles.find((vehicle) => vehicle.id === id);

    return new Promise((resolve) => resolve(result));
  }

  public async create(vehicle: Partial<ICreateVehicle>): Promise<IVehicle> {
    const newVehicle = new VehicleEntity();

    Object.assign(newVehicle, { id: v4() }, vehicle);

    return new Promise((resolve) => resolve(newVehicle));
  }
  public async save(vehicle: UpdateVehicle): Promise<IVehicle> {
    const index = this.vehicles.findIndex((v) => v.id === vehicle.id);

    this.vehicles[index] = { ...this.vehicles[index], ...vehicle };

    return new Promise((resolve) => resolve(this.vehicles[index]));
  }

  public async delete(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
  }
}
