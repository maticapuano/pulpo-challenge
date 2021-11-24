import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserWithIdUseCase } from "../../../useCases/CurrentUserUseCase";

export class GetCurrentUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(GetUserWithIdUseCase);
    const user_id = req.user_id as string;
    const user = await useCase.execute(user_id);

    return res.status(200).json(user);
  }
}
