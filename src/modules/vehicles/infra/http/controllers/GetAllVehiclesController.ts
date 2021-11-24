import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllVehiclesUseCase } from "../../../useCases/GetAllVehiclesUseCase";

export class GetAllVehiclesController {
  public async handle(_req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(GetAllVehiclesUseCase);
    const vehicles = await useCase.execute();

    return res.json(vehicles);
  }
}
