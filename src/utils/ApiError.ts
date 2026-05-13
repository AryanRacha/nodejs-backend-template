import { StatusCodes } from "http-status-codes";

class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors?: unknown;

  constructor(statusCode: number, message: string, errors?: unknown) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends ApiError {
  constructor(message: string, errors?: unknown) {
    super(StatusCodes.BAD_REQUEST, message, errors);
  }
}

class UnauthorizedError extends ApiError {
  constructor(message: string, errors?: unknown) {
    super(StatusCodes.UNAUTHORIZED, message, errors);
  }
}

class ForbiddenError extends ApiError {
  constructor(message: string, errors?: unknown) {
    super(StatusCodes.FORBIDDEN, message, errors);
  }
}

class NotFoundError extends ApiError {
  constructor(message: string, errors?: unknown) {
    super(StatusCodes.NOT_FOUND, message, errors);
  }
}

class ConflictError extends ApiError {
  constructor(message: string, errors?: unknown) {
    super(StatusCodes.CONFLICT, message, errors);
  }
}

export {
  ApiError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
