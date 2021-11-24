import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../shared/core/UseCase";
import { IVehiclesRepository } from "../domain/repositories/IVehiclesRepository";
import { IVehicle } from "../domain/schema/IVehicle";

@injectable()
export class GetAllVehiclesUseCase implements UseCase<void, Promise<IVehicle[]>> {
  public constructor(
    @inject("VehiclesRepository") private _vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(): Promise<Promise<IVehicle[]>> {
    const vehicles = await this._vehiclesRepository.findAll();

    return vehicles;
  }
}
