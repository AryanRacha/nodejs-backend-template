import adminRouter from "@/modules/admin/v1/admin.routes";
import authRouter from "@/modules/auth/v1/auth.routes";
import usersRouter from "@/modules/users/v1/users.routes";
import { Router } from "express";

const v1Router = Router();

v1Router.use("/auth", authRouter);
v1Router.use("/users", usersRouter);
v1Router.use("/admin", adminRouter);

export default v1Router;
