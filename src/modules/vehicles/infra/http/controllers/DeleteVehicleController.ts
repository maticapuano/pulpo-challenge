import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteVehicleByIdUseCase } from "../../../useCases/DeleteVehicleByIdUseCase";

export class DeleteVehicleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(DeleteVehicleByIdUseCase);
    const { id } = req.params;

    await useCase.execute(id);

    return res.status(200).json();
  }
}
