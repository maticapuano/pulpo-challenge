import { BadRequestError } from "./BadRequestError";

describe("BadRequestError", () => {
  it("should be able to serialize", () => {
    const error = new BadRequestError();

    expect(error.serialize()).toEqual([{ message: "Bad Request" }]);
  });
});
