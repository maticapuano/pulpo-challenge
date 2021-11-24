export type ErrorResponse = {
  message: string;
  path?: string | null;
  value?: string | null;
}[];

export abstract class BaseError extends Error {
  public constructor(message: string, public statusCode: number) {
    super(message);

    Object.setPrototypeOf(this, BaseError.prototype);
    this.stack = new Error().stack;
  }

  abstract serialize(): ErrorResponse;
}
