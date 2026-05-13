class ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
  meta?: unknown;

  constructor({ success, message, data, errors, meta }: ApiResponse<T>) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.errors = errors;
    this.meta = meta;
  }

  static success<T>({
    message,
    data,
    meta,
  }: {
    message: string;
    data?: T;
    meta?: unknown;
  }) {
    return new ApiResponse<T>({
      success: true,
      message,
      data,
      meta,
    });
  }

  static error({ message, errors }: { message: string; errors?: unknown }) {
    return new ApiResponse({
      success: false,
      message,
      errors,
    });
  }
}

export default ApiResponse;
