import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../shared/core/UseCase";
import { IVehiclesRepository } from "../domain/repositories/IVehiclesRepository";
import { IVehicle } from "../domain/schema/IVehicle";
import { VehicleFilter } from "../domain/VehicleFilter";

@injectable()
export class GetAllVehiclesUseCase implements UseCase<VehicleFilter, Promise<IVehicle[]>> {
  public constructor(
    @inject("VehiclesRepository") private _vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(filter: VehicleFilter): Promise<Promise<IVehicle[]>> {
    const vehicles = await this._vehiclesRepository.findAll(filter);

    return vehicles;
  }
}
