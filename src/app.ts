import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import ApiResponse from "@/utils/ApiResponse";
import { NotFoundError } from "@/utils/ApiError";
import errorMiddleware from "@/middlewares/error.middleware";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json(ApiResponse.success({ message: "Hello World" }));
});

app.get("/health", (_req: Request, res: Response) =>
  res.status(200).json(ApiResponse.success({ message: "Healthy" })),
);

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  throw new NotFoundError("Route not found!");
});

app.use(errorMiddleware);

export default app;
