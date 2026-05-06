import env from "./src/configs/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./db/migrations",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgres://${env.DB_USER}:${env.DB_PWD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
  },
});
