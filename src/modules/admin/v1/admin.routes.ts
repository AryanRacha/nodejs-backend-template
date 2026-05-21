import { Router } from "express";
import adminController from "@/modules/admin/v1/admin.controller";

const adminRouter = Router();

adminRouter.get("/dashboard", adminController.getDashboard);

adminRouter.get("/users", adminController.getUsers);
adminRouter.get("/users/:id", adminController.getUserById);
adminRouter.patch("/users/:id", adminController.updateUserById);
adminRouter.delete("/users/:id", adminController.deleteUserById);

adminRouter.patch("/users/:id/ban", adminController.banUserById);
adminRouter.patch("/users/:id/unban", adminController.unbanUserById);

adminRouter.post("/users/:id/roles  ", adminController.assignRoleById);
adminRouter.delete("/users/:id/roles/:roleId", adminController.removeRoleById);

adminRouter.get("/roles", adminController.getRoles);
adminRouter.post("/roles", adminController.createRole);
adminRouter.patch("/roles/:id", adminController.updateRole);
adminRouter.delete("/roles/:id", adminController.deleteRole);

adminRouter.get("/audit-logs", adminController.getAuditLogs);
adminRouter.get("/audit-logs/:id", adminController.getAuditLogById);

adminRouter.get("/stats", adminController.getStats);

export default adminRouter;
