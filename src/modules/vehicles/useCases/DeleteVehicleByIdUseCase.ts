import { inject, injectable } from "tsyringe";
import { VehiclesConstants } from "../../../shared/core/constants/vehicles.constants";
import { UseCase } from "../../../shared/core/UseCase";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IVehiclesRepository } from "../domain/repositories/IVehiclesRepository";

@injectable()
export class DeleteVehicleByIdUseCase implements UseCase<string, void> {
  public constructor(
    @inject("VehiclesRepository") private _vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const vehicle = await this._vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new NotFoundError(VehiclesConstants.VEHICLE_NOT_FOUND);
    }

    await this._vehiclesRepository.delete(id);
  }
}
