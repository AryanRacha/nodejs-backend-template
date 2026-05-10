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
import { VerificationTokenType } from "@/configs/constants";
import { users } from "@/db/schema";
import { relations } from "drizzle-orm";

export const typeEnum = pgEnum(
  "verification_token_type",
  VerificationTokenType,
);

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, {
      onDelete: "cascade",
    }),
    identifier: varchar("identifier", { length: 255 }).notNull(),
    verificationTokenHash: text("verification_token_hash").unique().notNull(),
    type: typeEnum("verification_token_type").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("identifier_type_unique").on(table.identifier, table.type),
    index("verification_tokens_expires_at_idx").on(table.expiresAt),
  ],
);

export const verificationTokensRelations = relations(
  verificationTokens,
  ({ one }) => ({
    user: one(users, {
      fields: [verificationTokens.userId],
      references: [users.id],
    }),
  }),
);
