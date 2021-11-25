import { Request, Response } from "express";
import { container } from "tsyringe";
import { yupValidationSchema } from "../../../../../shared/core/validation/yup-validation-schema";
import { ICreateVehicle } from "../../../domain/ICreateVehicle";
import { CreateVehicleUseCase } from "../../../useCases/CreateVehicleUseCase";
import { createVehicleValidation } from "../../../validation/create-vehicle-validation";

export class CreateVehicleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateVehicleUseCase);
    const data: ICreateVehicle = await yupValidationSchema(createVehicleValidation, req.body);
    const createVehicle = await useCase.execute(data);

    return res.status(201).json(createVehicle);
  }
}
