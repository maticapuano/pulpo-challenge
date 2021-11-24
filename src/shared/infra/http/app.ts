import "reflect-metadata";
import "../../providers/container";
import express from "express";
import { appConfig } from "../../../config/app.config";
import { apiRoutes } from "./routes";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appConfig.API_PREFIX, apiRoutes);
