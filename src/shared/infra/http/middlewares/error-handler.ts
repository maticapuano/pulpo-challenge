import { NextFunction, Request, Response } from "express";
import { BaseError } from "../../../errors/BaseError";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({
      name: err.name,
      errors: err.serialize(),
    });
  }

  next();
};
