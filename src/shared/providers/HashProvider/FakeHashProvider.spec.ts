import { FakeHashProvider } from "./fake/FakeHashProvider";

describe("FakeHashProvider", () => {
  it("should be able to generate hash", async () => {
    const hashProvider = new FakeHashProvider();
    const password = "some-password-secret";
    const hash = await hashProvider.hash(password);

    expect(hash).toBe("some-password-secret");
  });

  it("should be able to compare hash", async () => {
    const hashProvider = new FakeHashProvider();
    const password = "some-password-secret";
    const hash = await hashProvider.hash(password);

    const compareHash = await hashProvider.compare(password, hash);

    expect(compareHash).toBe(true);
  });

  it("should not be able to compare hash", async () => {
    const hashProvider = new FakeHashProvider();
    const password = "some-password-secret";
    const hash = await hashProvider.hash(password);

    const compareHash = await hashProvider.compare("wrong-password", hash);

    expect(compareHash).toBe(false);
  });
});
