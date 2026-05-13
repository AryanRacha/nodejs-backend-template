import env from "@/configs/env";
import logger from "@/utils/logger";
import app from "@/app";
import connectDB from "@/configs/db";

logger.info(`env verified and logger initialized!`);

app.listen(env.PORT, async () => {
  await connectDB();
  logger.info(`Server is listening at http://localhost:${env.PORT}`);
});
