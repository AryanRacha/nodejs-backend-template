export enum UserStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  BANNED = "BANNED",
}

export enum AuthProvider {
  CREDENTIALS = "credentials",
  GOOGLE = "google",
  GITHUB = "github",
}

export enum VerificationTokenType {
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
  PASSWORD_RESET = "PASSWORD_RESET",
  MAGIC_LINK = "MAGIC_LINK",
}
