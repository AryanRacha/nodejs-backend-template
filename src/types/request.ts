import { Request } from "express";
import { z, ZodType } from "zod";

export type RequestSchema = {
  body?: ZodType<any>;
  query?: ZodType<any>;
  params?: ZodType<any>;
};

type Infer<T> = T extends ZodType ? z.infer<T> : {};

export type ValidRequest<T extends RequestSchema> = Request<
  Infer<T["params"]>,
  any,
  Infer<T["body"]>,
  Infer<T["query"]>
>;
