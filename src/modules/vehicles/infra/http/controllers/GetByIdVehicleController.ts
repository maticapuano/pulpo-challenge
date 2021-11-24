import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetVehicleByIdUseCase } from "../../../useCases/GetVehicleByIdUseCase";

export class GetByIdVehicleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(GetVehicleByIdUseCase);
    const vehicle = await useCase.execute(req.params.id);

    return res.json(vehicle);
  }
}
