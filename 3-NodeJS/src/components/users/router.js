import { Router } from "express";
import { CreateUsersController } from "./controllers/CreateUsers.js";

const router = Router();

router.post("/users", CreateUsersController);

export default router;
