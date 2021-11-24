import { getRepository, Repository } from "typeorm";
import { ICreateVehicle } from "../../../domain/ICreateVehicle";
import { IVehiclesRepository } from "../../../domain/repositories/IVehiclesRepository";
import { IVehicle } from "../../../domain/schema/IVehicle";
import { UpdateVehicle } from "../../../domain/UpdateVehicle";
import { VehicleEntity } from "../entities/Vehicle.entity";

export class VehiclesRepository implements IVehiclesRepository {
  private ormRepository: Repository<IVehicle>;

  public constructor() {
    this.ormRepository = getRepository(VehicleEntity);
  }

  public async findAll(): Promise<IVehicle[]> {
    const vehicles = await this.ormRepository.find();

    return vehicles;
  }

  public async findById(id: string): Promise<IVehicle | undefined> {
    const vehicle = await this.ormRepository.findOne({
      where: { id },
    });

    return vehicle;
  }

  public async create(vehicle: ICreateVehicle): Promise<IVehicle> {
    const newVehicle = this.ormRepository.create(vehicle);

    await this.ormRepository.save(newVehicle);

    return newVehicle;
  }

  public async save(vehicle: UpdateVehicle): Promise<IVehicle> {
    const vehicleToSave = this.ormRepository.create(vehicle);
    const savedVehicle = await this.ormRepository.save(vehicleToSave);

    return savedVehicle;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
