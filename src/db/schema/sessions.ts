import {
  pgTable,
  text,
  timestamp,
  uuid,
  index,
  inet,
} from "drizzle-orm/pg-core";
import { users } from "@/db/schema";
import { relations } from "drizzle-orm";

export const sessions = pgTable(
  "sessions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),
    refreshTokenHash: text("refresh_token_hash").unique().notNull(),
    ipAddress: inet("ip_address"),
    userAgent: text("user_agent"),
    deviceInfo: text("device_info"),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    revokedAt: timestamp("revoked_at", {
      withTimezone: true,
    }),
    lastUsedAt: timestamp("last_used_at", {
      withTimezone: true,
    }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("sessions_active_lookup_idx").on(
      table.userId,
      table.revokedAt,
      table.expiresAt,
    ),
  ],
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
