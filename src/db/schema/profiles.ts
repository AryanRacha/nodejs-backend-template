import {
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "@/db/schema";
import { relations } from "drizzle-orm";

export const profiles = pgTable("profiles", {
  userId: uuid("user_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .primaryKey(),
  username: varchar("username", {
    length: 50,
  })
    .unique()
    .notNull(),
  displayName: varchar("display_name", {
    length: 100,
  }).notNull(),
  avatarUrl: text("avatar_url"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
}));
