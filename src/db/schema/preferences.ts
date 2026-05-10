import { relations } from "drizzle-orm";
import { jsonb, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "@/db/schema";

export const preferences = pgTable("preferences", {
  userId: uuid("user_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .primaryKey()
    .notNull(),
  settings: jsonb("settings").default({}).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const preferencesRelations = relations(preferences, ({ one }) => ({
  user: one(users, {
    fields: [preferences.userId],
    references: [users.id],
  }),
}));
