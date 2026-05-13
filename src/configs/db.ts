import db from "@/db";
import logger from "@/utils/logger";
import { DrizzleQueryError } from "drizzle-orm";

const connectDB = async () => {
  try {
    await db.execute(`SELECT 1`);
    logger.info("DB Connected!");
  } catch (error) {
    if (error instanceof DrizzleQueryError) {
      logger.error(error.message, error.cause);
    } else {
      logger.error("DB Connection Failed!", error);
    }

    process.exit(1);
  }
};

export default connectDB;
