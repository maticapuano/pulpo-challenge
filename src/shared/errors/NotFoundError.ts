import { BaseError, ErrorResponse } from "./BaseError";

export class NotFoundError extends BaseError {
  public name = "NotFoundError";

  public constructor(message?: string) {
    super(message || "Not Found", 404);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serialize(): ErrorResponse {
    return [{ message: this.message }];
  }
}
