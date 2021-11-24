import { HashProvider } from "./interfaces/HashProvider";
import { hashSync, compareSync } from "bcryptjs";

export class BcryptHashProvider implements HashProvider {
  public async hash(payload: string): Promise<string> {
    const hashed = await hashSync(payload, 8);

    return hashed;
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    const isValid = await compareSync(payload, hashed);

    return isValid;
  }
}
