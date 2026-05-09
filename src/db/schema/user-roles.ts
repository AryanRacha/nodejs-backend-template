import { uuid, pgTable, primaryKey, index } from "drizzle-orm/pg-core";
import { users } from "./users";
import { roles } from "./roles";
import { relations } from "drizzle-orm";

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),
    roleId: uuid("role_id")
      .references(() => roles.id, {
        onDelete: "cascade",
      })
      .notNull(),
  },
  (table) => [
    primaryKey({ name: "user_role_id", columns: [table.userId, table.roleId] }),
    index("user_role_idx").on(table.roleId),
  ],
);

export const userRolesRelations = relations(userRoles, ({ many }) => ({
  user: many(users),
  role: many(roles),
}));
