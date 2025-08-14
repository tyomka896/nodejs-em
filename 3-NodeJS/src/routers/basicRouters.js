import { Router } from "express";

import { NotFoundError } from "#errors/index.js";

const router = Router();

/**
 * How to check:
 * - curl http://localhost:3000/test
 */
router.get("/", (_, res) => {
    res.send("GET request");
});

/**
 * How to check:
 * - curl -X POST http://localhost:3000/test
 */
router.post("/", (_, res) => {
    res.send("POST request");
});

router.put("/", (_, _res) => {
    throw new NotFoundError();
});

export default router;
