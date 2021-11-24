import { Request, Response } from "express";
import { container } from "tsyringe";
import { SignInUserUseCase } from "../../../useCases/SignInUserUseCase";

export class SignInUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(SignInUserUseCase);
    //TODO: implemented validation request
    const user = await useCase.execute(req.body);

    return res.status(200).json(user);
  }
}
