import { appConfig } from "../../../config/app.config";
import { app } from "./app";

const bootstrap = async (): Promise<void> => {
  app.listen(appConfig.PORT, () =>
    console.log(`Server running on port ${appConfig.PORT}`)
  );
};

bootstrap();
