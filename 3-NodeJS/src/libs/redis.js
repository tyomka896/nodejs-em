import Redis from "ioredis";

import {
    REDIS_DB,
    REDIS_HOST,
    REDIS_PASSWORD,
    REDIS_PORT,
} from "#config/redis.js";

export let redis;

try {
    redis = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        password: REDIS_PASSWORD,
        db: REDIS_DB,
        enableReadyCheck: false,
        retryStrategy: () => null,
    });

    redis.on(
        "error",
        (error) => {
            console.error("Redis connection error:", error.toString());

            redis = new Proxy({}, {
                get(_target, _prop, _receiver) {
                    return (...args) => Promise.resolve(null);
                },
            });
        },
    );
} catch (error) {
    console.error("Failed to initialize Redis:", error);
}
