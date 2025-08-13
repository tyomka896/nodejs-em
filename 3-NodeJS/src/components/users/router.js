import { Router } from "express";

import { AuthMiddleware } from "#middleware/AuthMiddleware.js";
import CreateUsersController from "#components/users/controllers/CreateUsers.js";
import GetUsersController from "#components/users/controllers/GetUsers.js";
import { UpdateUserController } from "#components/users/controllers/UpdateUsers.js";

const router = Router();

router.post("/users", CreateUsersController.run);
router.get("/users", AuthMiddleware, GetUsersController.run);
router.put("/users/:id", UpdateUserController);

export default router;
