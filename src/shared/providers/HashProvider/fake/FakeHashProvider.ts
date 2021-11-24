import { HashProvider } from "../interfaces/HashProvider";

export class FakeHashProvider implements HashProvider {
  public async hash(payload: string): Promise<string> {
    return new Promise((resolve) => resolve(payload));
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    const isValid = payload === hashed;

    return new Promise((resolve) => resolve(isValid));
  }
}
