import { Router } from "express";

import { AuthMiddleware } from "#middleware/AuthMiddleware.js";
import CreateUserController from "#components/users/controllers/CreateUser.js";
import GetUserController from "#components/users/controllers/GetUser.js";
import UpdateUserController from "#components/users/controllers/UpdateUser.js";

const router = Router();

router.post("/users", CreateUserController.run);
router.get("/users", AuthMiddleware, GetUserController.run);
router.put("/users/:id", UpdateUserController.run);

export default router;
