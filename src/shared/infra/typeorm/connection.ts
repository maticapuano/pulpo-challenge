import { createConnection } from "typeorm";
import { ConnectionConfig } from "../../../config/interfaces/ConnectionConfig";

export class ConnectionFactory {
  public static async connect(options: ConnectionConfig): Promise<void> {
    await createConnection({
      type: "postgres",
      host: options.DATABASE_HOST,
      port: options.DATABASE_PORT,
      username: options.DATABASE_USER,
      password: options.DATABASE_PASSWORD,
      database: options.DATABASE_NAME,
      synchronize: true,
      entities: [
        __dirname + "/../../../modules/**/infra/typeorm/entities/*.{ts,js}",
      ],
      logging: true,
    });
  }
}
