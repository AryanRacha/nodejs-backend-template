import { relations } from "drizzle-orm/relations";
import { users, preferences, accounts, auditLogs, sessions, verificationTokens, profiles, userRoles, roles } from "./schema";

export const preferencesRelations = relations(preferences, ({one}) => ({
	user: one(users, {
		fields: [preferences.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	preferences: many(preferences),
	accounts: many(accounts),
	auditLogs: many(auditLogs),
	sessions: many(sessions),
	verificationTokens: many(verificationTokens),
	profiles: many(profiles),
	userRoles: many(userRoles),
}));

export const accountsRelations = relations(accounts, ({one}) => ({
	user: one(users, {
		fields: [accounts.userId],
		references: [users.id]
	}),
}));

export const auditLogsRelations = relations(auditLogs, ({one}) => ({
	user: one(users, {
		fields: [auditLogs.actorUserId],
		references: [users.id]
	}),
}));

export const sessionsRelations = relations(sessions, ({one}) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id]
	}),
}));

export const verificationTokensRelations = relations(verificationTokens, ({one}) => ({
	user: one(users, {
		fields: [verificationTokens.userId],
		references: [users.id]
	}),
}));

export const profilesRelations = relations(profiles, ({one}) => ({
	user: one(users, {
		fields: [profiles.userId],
		references: [users.id]
	}),
}));

export const userRolesRelations = relations(userRoles, ({one}) => ({
	user: one(users, {
		fields: [userRoles.userId],
		references: [users.id]
	}),
	role: one(roles, {
		fields: [userRoles.roleId],
		references: [roles.id]
	}),
}));

export const rolesRelations = relations(roles, ({many}) => ({
	userRoles: many(userRoles),
}));