import { Router } from "express";

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

export default router;
