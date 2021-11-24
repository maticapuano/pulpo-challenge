import { Request, Response } from "express";
import { container } from "tsyringe";
import { yupValidationSchema } from "../../../../../shared/core/validation/yup-validation-schema";
import { UpdateVehicleByIdUseCase } from "../../../useCases/UpdateVehicleByIdUseCase";
import { updateVehicleValidation } from "../../../validation/update-vehicle-validation";

export class UpdateVehicleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(UpdateVehicleByIdUseCase);
    const data = await yupValidationSchema(updateVehicleValidation, req.body);
    const { id } = req.params;

    await useCase.execute({ id, ...data });

    return res.status(204).json({});
  }
}
