import "reflect-metadata";
import "express-async-errors";
import "../../providers/container";
import express from "express";
import { appConfig } from "../../../config/app.config";
import { apiRoutes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "../../errors/NotFoundError";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appConfig.API_PREFIX, apiRoutes);

app.use(() => {
  throw new NotFoundError();
});

app.use(errorHandler);
