import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  PORT: z.coerce.number().min(1).max(65535),
  DB_USER: z.string(),
  DB_PWD: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
});

const env = envSchema.safeParse(process.env);

if (env.success !== true) {
  const errors = z.treeifyError(env.error).properties;
  console.error("Invalid environment variables: ", errors);
  process.exit(1);
}

export default env.data;
