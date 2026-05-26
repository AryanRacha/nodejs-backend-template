import authValidation from "@/modules/auth/auth.validation";

export type Register = typeof authValidation.register;
export type Login = typeof authValidation.login;
export type ResendEmail = typeof authValidation.resendEmail;
export type VerifyEmail = typeof authValidation.verifyEmail;
export type ForgotPassword = typeof authValidation.forgotPassword;
export type ResetPassword = typeof authValidation.resetPassword;
export type ChangePassword = typeof authValidation.changePassword;
