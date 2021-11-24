import { BaseError, ErrorResponse } from "./BaseError";

export class BadRequestError extends BaseError {
  public name = "BadRequestError";

  public constructor(message?: string) {
    super(message || "Bad Request", 400);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serialize(): ErrorResponse {
    return [{ message: this.message }];
  }
}
