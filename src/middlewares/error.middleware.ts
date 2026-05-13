import { ApiError } from "@/utils/ApiError";
import ApiResponse from "@/utils/ApiResponse";
import logger from "@/utils/logger";
import { NextFunction, Request, Response } from "express";
import env from "@/configs/env";

const isProduction = env.NODE_ENV === "production";

const errorMiddleware = (
  err: ApiError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApiError) {
    logger.warn(err.message, err.errors);

    return res.status(err.statusCode).json(
      ApiResponse.error({
        message: err.message,
        errors: err.errors,
      }),
    );
  }

  logger.error(err.message, err);
  return res.status(500).json(
    ApiResponse.error({
      message: "Internal Server Error",
      errors: isProduction ? undefined : { stack: err.stack },
    }),
  );
};

export default errorMiddleware;
