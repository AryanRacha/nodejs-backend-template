import { Router } from "express";
import usersController from "@/modules/users/v1/users.controller";

const usersRouter = Router();

usersRouter.get("/me", usersController.getUser);
usersRouter.patch("/me", usersController.updateUser);
usersRouter.delete("/me", usersController.deleteUser);

usersRouter.get("/me/preferences", usersController.getPreferences);
usersRouter.patch("/me/preferences", usersController.updatePreferences);

usersRouter.get("/check-username", usersController.checkUsername);
usersRouter.get("/search", usersController.searchUsers);

usersRouter.get("/:username", usersController.getPublicProfile);

export default usersRouter;
