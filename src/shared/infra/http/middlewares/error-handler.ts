import { NextFunction, Request, Response } from "express";
import { ValidationError } from "yup";
import { yupValidationParser } from "../../../core/validation/yup-errors-parser";
import { BaseError } from "../../../errors/BaseError";

export const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({
      name: err.name,
      errors: err.serialize(),
    });
  }

  if (err instanceof ValidationError) {
    const serializedErrors = yupValidationParser(err);
    return res.status(400).send({
      name: "ValidationError",
      errors: serializedErrors,
    });
  }

  next();
};
