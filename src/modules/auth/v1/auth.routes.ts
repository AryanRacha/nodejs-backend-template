import { Router } from "express";
import authValidation from "@/modules/auth/auth.validation";
import authController from "@/modules/auth/v1/auth.controller";
import validate from "@/middlewares/validation.middleware";

const authRouter = Router();

authRouter.post(
  "/register",
  validate(authValidation.register),
  authController.register,
);
authRouter.post("/login", validate(authValidation.login), authController.login);

authRouter.post(
  "/resend-email",
  validate(authValidation.resendEmail),
  authController.resendEmail,
);
authRouter.post(
  "/verify-email",
  validate(authValidation.verifyEmail),
  authController.verifyEmail,
);

authRouter.post(
  "/forgot-password",
  validate(authValidation.forgotPassword),
  authController.forgotPassword,
);
authRouter.post(
  "/reset-password",
  validate(authValidation.resetPassword),
  authController.resetPassword,
);

authRouter.get("/google", authController.google);
authRouter.get("/google/callback", authController.googleCallback);

authRouter.get("/github", authController.github);
authRouter.get("/github/callback", authController.githubCallback);

//protected (will add later)
authRouter.post("/refresh", authController.refresh);

authRouter.patch(
  "/change-password",
  validate(authValidation.changePassword),
  authController.changePassword,
);

authRouter.post("/logout", authController.logout);
authRouter.post("/logout-all", authController.logoutAll);

authRouter.get("/sessions", authController.getSessions);
authRouter.delete("/sessions/:id", authController.deleteSession);

export default authRouter;
