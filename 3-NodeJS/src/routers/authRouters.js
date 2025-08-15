import { Router } from "express";

import AuthController from "#components/auth/controllers/Auth.js";
import AuthRefreshController from "#components/auth/controllers/AuthRefresh.js";

const router = Router();

router.post("/auth", AuthController.run);
router.post("/auth/refresh", AuthRefreshController.run);

export default router;
