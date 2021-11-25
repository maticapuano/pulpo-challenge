import { NotFoundError } from "./NotFoundError";

describe("NotFoundError", () => {
  it("should be able to serialize", () => {
    const error = new NotFoundError();

    expect(error.serialize()).toEqual([{ message: "Not Found" }]);
  });
});
