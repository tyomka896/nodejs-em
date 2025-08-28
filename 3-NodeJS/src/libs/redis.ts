import Redis, { Redis as RedisClient } from "ioredis";

import {
    REDIS_DB,
    REDIS_HOST,
    REDIS_PASSWORD,
    REDIS_PORT,
} from "#config/redis.ts";

type ProxyType = {
    [key: string]: (...args: any[]) => Promise<null>;
};

export let redis: RedisClient | ProxyType;

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
        (error: Error) => {
            console.error("Redis connection error:", error.toString());

            redis = new Proxy<ProxyType>({}, {
                get(_target, _prop, _receiver) {
                    return (_: unknown) => Promise.resolve(null);
                },
            });
        },
    );
} catch (error) {
    console.error("Failed to initialize Redis:", error);
}

process.on("SIGTERM", () => redis.quit());
process.on("SIGINT", () => redis.quit());
