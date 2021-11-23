import { Router } from "express";

export const apiRoutes = Router();

apiRoutes.get("/say", (_req, res) => {
  res.json({ message: "Hello World" });
});
