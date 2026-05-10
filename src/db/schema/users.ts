import { uuid, pgTable, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { UserStatus } from "@/configs/constants";
import { relations } from "drizzle-orm";
import {
  accounts,
  sessions,
  verificationTokens,
  userRoles,
  profiles,
  preferences,
  auditLogs,
} from "@/db/schema";

export const statusEnum = pgEnum("user_status", UserStatus);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  emailVerifiedAt: timestamp("email_verified_at", { withTimezone: true }),
  status: statusEnum("user_status").default(UserStatus.ACTIVE).notNull(),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  preference: one(preferences, {
    fields: [users.id],
    references: [preferences.userId],
  }),

  accounts: many(accounts),
  sessions: many(sessions),
  verificationTokens: many(verificationTokens),
  userRoles: many(userRoles),
  auditLogs: many(auditLogs),
}));
