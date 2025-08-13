import { Router } from "express";

import AuthController from "#components/auth/controllers/Auth.js";

const router = Router();

router.post("/login", AuthController.run);

export default router;
