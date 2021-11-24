import { BaseError, ErrorResponse } from "./BaseError";

export class UnauthorizedError extends BaseError {
  public name = "UnauthorizedError";

  public constructor(message?: string) {
    super(message || "Unauthorized", 401);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  public serialize(): ErrorResponse {
    return [{ message: this.message }];
  }
}
