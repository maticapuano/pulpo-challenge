import { appConfig } from "../../../config/app.config";
import { databaseConfig } from "../../../config/database.config";
import { ConnectionFactory } from "../typeorm/connection";
import { app } from "./app";

const bootstrap = async (): Promise<void> => {
  await ConnectionFactory.connect(databaseConfig);

  app.listen(appConfig.PORT, () =>
    console.log(`Server running on port ${appConfig.PORT}`)
  );
};

bootstrap();
