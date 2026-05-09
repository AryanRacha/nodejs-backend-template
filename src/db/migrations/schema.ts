import { pgTable, unique, uuid, varchar, text, foreignKey, jsonb, timestamp, index, primaryKey, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const authProvider = pgEnum("auth_provider", ['credentials', 'google', 'github'])
export const userStatus = pgEnum("user_status", ['ACTIVE', 'SUSPENDED', 'BANNED'])
export const verificationTokenType = pgEnum("verification_token_type", ['EMAIL_VERIFICATION', 'PASSWORD_RESET', 'MAGIC_LINK'])


export const roles = pgTable("roles", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 50 }).notNull(),
	description: text(),
}, (table) => [
	unique("roles_name_unique").on(table.name),
]);

export const preferences = pgTable("preferences", {
	userId: uuid("user_id").primaryKey().notNull(),
	preferences: jsonb().default({}).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "preferences_user_id_users_id_fk"
		}),
]);

export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	emailVerifiedAt: timestamp("email_verified_at", { withTimezone: true, mode: 'string' }),
	userStatus: userStatus("user_status").default('ACTIVE').notNull(),
	lastLoginAt: timestamp("last_login_at", { withTimezone: true, mode: 'string' }),
	deletedAt: timestamp("deleted_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);

export const accounts = pgTable("accounts", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	authProvider: authProvider("auth_provider").notNull(),
	providerUserId: varchar("provider_user_id", { length: 255 }).notNull(),
	passwordHash: text("password_hash"),
	providerAccessToken: text("provider_access_token"),
	providerRefreshToken: text("provider_refresh_token"),
	providerTokenExpiresAt: timestamp("provider_token_expires_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("accounts_user_id_idx").using("btree", table.userId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "accounts_user_id_users_id_fk"
		}).onDelete("cascade"),
	unique("provider_user_id_unique").on(table.providerUserId, table.authProvider),
]);

export const auditLogs = pgTable("audit_logs", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	actorUserId: uuid("actor_user_id"),
	action: varchar({ length: 100 }).notNull(),
	rescourceType: varchar("rescource_type", { length: 100 }),
	resourceId: varchar("resource_id", { length: 255 }),
	metadata: jsonb(),
	ipAddress: varchar("ip_address", { length: 255 }),
	userAgent: text("user_agent"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("audit_logs_action_idx").using("btree", table.action.asc().nullsLast().op("text_ops")),
	index("audit_logs_actor_user_id_idx").using("btree", table.actorUserId.asc().nullsLast().op("uuid_ops")),
	index("audit_logs_created_at_idx").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("audit_logs_resource_idx").using("btree", table.rescourceType.asc().nullsLast().op("text_ops"), table.resourceId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.actorUserId],
			foreignColumns: [users.id],
			name: "audit_logs_actor_user_id_users_id_fk"
		}).onDelete("set null"),
]);

export const sessions = pgTable("sessions", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	refreshTokenHash: text("refresh_token_hash").notNull(),
	ipAddress: varchar("ip_address", { length: 255 }),
	userAgent: text("user_agent"),
	deviceInfo: text("device_info"),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
	revokedAt: timestamp("revoked_at", { withTimezone: true, mode: 'string' }),
	lastUsedAt: timestamp("last_used_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("sessions_expires_at_idx").using("btree", table.expiresAt.asc().nullsLast().op("timestamptz_ops")),
	index("sessions_revoked_at_idx").using("btree", table.revokedAt.asc().nullsLast().op("timestamptz_ops")),
	index("sessions_user_id_idx").using("btree", table.userId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "sessions_user_id_users_id_fk"
		}).onDelete("cascade"),
]);

export const verificationTokens = pgTable("verification_tokens", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id"),
	identifier: varchar({ length: 255 }).notNull(),
	token: text().notNull(),
	verificationTokenType: verificationTokenType("verification_token_type").notNull(),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
	usedAt: timestamp("used_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("verification_tokens_expires_at_idx").using("btree", table.expiresAt.asc().nullsLast().op("timestamptz_ops")),
	index("verification_tokens_identifier_idx").using("btree", table.identifier.asc().nullsLast().op("text_ops")),
	index("verification_tokens_type_idx").using("btree", table.verificationTokenType.asc().nullsLast().op("enum_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "verification_tokens_user_id_users_id_fk"
		}).onDelete("cascade"),
]);

export const profiles = pgTable("profiles", {
	userId: uuid("user_id").primaryKey().notNull(),
	username: varchar({ length: 50 }).notNull(),
	displayName: varchar("display_name", { length: 100 }).notNull(),
	avatarUrl: text("avatar_url"),
	metadata: jsonb(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "profiles_user_id_users_id_fk"
		}).onDelete("cascade"),
	unique("profiles_username_unique").on(table.username),
]);

export const userRoles = pgTable("user_roles", {
	userId: uuid("user_id").notNull(),
	roleId: uuid("role_id").notNull(),
}, (table) => [
	index("user_role_idx").using("btree", table.roleId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "user_roles_user_id_users_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.roleId],
			foreignColumns: [roles.id],
			name: "user_roles_role_id_roles_id_fk"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.userId, table.roleId], name: "user_role_id"}),
]);
