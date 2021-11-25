import { Request, Response } from "express";
import { container } from "tsyringe";
import { yupValidationSchema } from "../../../../../shared/core/validation/yup-validation-schema";
import { GetAllVehiclesUseCase } from "../../../useCases/GetAllVehiclesUseCase";
import { filterVehicleValidation } from "../../../validation/filter-vehicle-params-validation";

export class GetAllVehiclesController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(GetAllVehiclesUseCase);
    const data = await yupValidationSchema(filterVehicleValidation, req.query);
    const vehicles = await useCase.execute(data);

    return res.json(vehicles);
  }
}
