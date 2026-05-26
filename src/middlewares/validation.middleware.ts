import { RequestSchema, ValidRequest } from "@/types/request";
import { BadRequestError } from "@/utils/ApiError";
import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

const validate =
  (schema: RequestSchema) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        req.body = await schema.body.parseAsync(req.body);
      }

      if (schema.query) {
        req.query = await schema.query.parseAsync(req.query);
      }

      if (schema.params) {
        req.params = await schema.params.parseAsync(req.params);
      }

      next();
    } catch (err) {
      next(err);
    }
  };

export default validate;
