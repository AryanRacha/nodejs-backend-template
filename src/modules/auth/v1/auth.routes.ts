import { Router } from "express";
import authController from "@/modules/auth/v1/auth.controller";

const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/refresh", authController.refresh);

authRouter.post("/verify-email", authController.verifyEmail);
authRouter.post("/resend-email", authController.resendEmail);

authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/reset-password", authController.resetPassword);

authRouter.get("/google", authController.google);
authRouter.get("/google/callback", authController.googleCallback);

authRouter.get("/github", authController.github);
authRouter.get("/github/callback", authController.githubCallback);

//protected (will add later)
authRouter.patch("/change-password", authController.changePassword);

authRouter.post("/logout", authController.logout);
authRouter.post("/logout-all", authController.logoutAll);

authRouter.get("/sessions", authController.getSessions);
authRouter.delete("/sessions/:id", authController.deleteSession);

export default authRouter;
