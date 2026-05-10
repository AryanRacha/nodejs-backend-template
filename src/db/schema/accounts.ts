import {
  index,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { AuthProvider } from "@/configs/constants";
import { users } from "@/db/schema";
import { relations } from "drizzle-orm";

export const providerEnum = pgEnum("auth_provider", AuthProvider);

export const accounts = pgTable(
  "accounts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),
    provider: providerEnum("auth_provider").notNull(),
    providerUserId: varchar("provider_user_id", { length: 255 }).notNull(),
    passwordHash: text("password_hash"),
    oauthAccessToken: text("oauth_access_token"),
    oauthRefreshToken: text("oauth_refresh_token"),
    oauthTokenExpiresAt: timestamp("provider_token_expires_at", {
      withTimezone: true,
    }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("provider_user_id_unique").on(table.provider, table.providerUserId),
    index("accounts_user_id_idx").on(table.userId),
  ],
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));
