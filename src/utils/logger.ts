import env from "@/configs/env";
import { format, createLogger, transports } from "winston";
const { combine, colorize, timestamp, errors, printf, json, prettyPrint } =
  format;

const isProduction = env.NODE_ENV === "production";

const devFormat = combine(
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  errors({ stack: true }),
  printf(({ timestamp, level, message, stack, ...meta }) => {
    const metaString =
      Object.keys(meta).length > 0 ? `\n${JSON.stringify(meta, null, 2)}` : "";

    return [`[${timestamp}] ${level}: ${stack || message}`, metaString]
      .filter(Boolean)
      .join("\n");
  }),
);

const prodFormat = format.combine(
  json(),
  timestamp(),
  errors({ stack: true }),
  prettyPrint(),
);

const logger = createLogger({
  level: isProduction ? "info" : "debug",
  format: isProduction ? prodFormat : devFormat,
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "error.log",
      level: "error",
      format: prodFormat,
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
  exitOnError: false,
});

export default logger;
