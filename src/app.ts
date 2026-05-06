import express from "express";
import { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

export default app;
