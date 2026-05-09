import { relations } from "drizzle-orm";
import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { userRoles } from "@/db/schema";

export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", {
    length: 50,
  })
    .unique()
    .notNull(),
  description: text("description"),
});

export const rolesRelations = relations(roles, ({ many }) => ({
  userRoles: many(userRoles),
}));
