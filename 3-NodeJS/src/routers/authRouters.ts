import { Router } from "express";

import AuthController from "#components/auth/controllers/Auth.ts";
import AuthRefreshController from "#components/auth/controllers/AuthRefresh.ts";

const router: Router = Router();

router.post("/auth", AuthController.run);
router.post("/auth/refresh", AuthRefreshController.run);

export default router;
