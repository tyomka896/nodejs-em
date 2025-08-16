import { Router } from "express";

import { AuthMiddleware } from "#middleware/AuthMiddleware.ts";
import CreateUserController from "#components/users/controllers/CreateUser.ts";
import GetUserController from "#components/users/controllers/GetUser.ts";
import UpdateUserController from "#components/users/controllers/UpdateUser.ts";

const router: Router = Router();

router.post("/users", CreateUserController.run);
router.get("/users", AuthMiddleware, GetUserController.run);
router.put("/users/:id", UpdateUserController.run);

export default router;
