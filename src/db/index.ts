import env from "@/configs/env";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema";

const db = drizzle(
  `postgres://${env.DB_USER}:${env.DB_PWD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
  { schema },
);

export default db;
