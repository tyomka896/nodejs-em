import { Router } from "express";

import { CreateUsersController } from "./controllers/CreateUsers.js";
import { GetUsersController } from "./controllers/GetUsers.js";
import { UpdateUserController } from "./controllers/UpdateUsers.js";

const router = Router();

router.post("/users", CreateUsersController);
router.get("/users", GetUsersController);
router.put("/users/:id", UpdateUserController);

export default router;
