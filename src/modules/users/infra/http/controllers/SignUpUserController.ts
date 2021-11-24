import { Request, Response } from "express";
import { container } from "tsyringe";
import { yupValidationSchema } from "../../../../../shared/core/validation/yup-validation-schema";
import { ICreateUser } from "../../../domain/ICreateUser";
import { SignUpUserUseCase } from "../../../useCases/SignUpUserUseCase";
import { signUpUserValidation } from "../../../validation/signup-user-validation";

export class SignUpUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(SignUpUserUseCase);
    const data: ICreateUser = await yupValidationSchema(signUpUserValidation, req.body);
    const user = await useCase.execute(data);

    return res.status(201).json(user);
  }
}
