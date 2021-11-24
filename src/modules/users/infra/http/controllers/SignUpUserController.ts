import { Request, Response } from "express";
import { container } from "tsyringe";
import { SignUpUserUseCase } from "../../../useCases/SignUpUserUseCase";

export class SignUpUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(SignUpUserUseCase);
    const user = await useCase.execute(req.body);

    return res.status(201).json(user);
  }
}
