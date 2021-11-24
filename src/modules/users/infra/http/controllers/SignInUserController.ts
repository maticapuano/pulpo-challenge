import { Request, Response } from "express";
import { container } from "tsyringe";
import { yupValidationSchema } from "../../../../../shared/core/validation/yup-validation-schema";
import { ISignInUser } from "../../../domain/ISignInUser";
import { SignInUserUseCase } from "../../../useCases/SignInUserUseCase";
import { signInUserValidation } from "../../../validation/signin-user-validation";

export class SignInUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(SignInUserUseCase);
    const data: ISignInUser = await yupValidationSchema(signInUserValidation, req.body);
    const user = await useCase.execute(data);

    return res.status(200).json(user);
  }
}
