import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../shared/core/UseCase";
import { ICreateVehicle } from "../domain/ICreateVehicle";
import { IVehiclesRepository } from "../domain/repositories/IVehiclesRepository";
import { IVehicle } from "../domain/schema/IVehicle";

@injectable()
export class CreateVehicleUseCase implements UseCase<ICreateVehicle, IVehicle> {
  public constructor(
    @inject("VehiclesRepository") private _vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(data: ICreateVehicle): Promise<IVehicle> {
    const vehicle = await this._vehiclesRepository.create(data);

    return vehicle;
  }
}
