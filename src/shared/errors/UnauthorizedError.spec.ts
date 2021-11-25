import { UnauthorizedError } from "./UnauthorizedError";

describe("UnauthorizedError", () => {
  it("should be able to serialize", () => {
    const error = new UnauthorizedError();

    expect(error.serialize()).toEqual([{ message: "Unauthorized" }]);
  });
});
