import Config from "config";

export const REDIS_HOST = Config.get("REDIS.HOST") || "localhost";

export const REDIS_PORT = Config.get("REDIS.PORT") || 6379;

export const REDIS_PASSWORD = Config.get("REDIS.PASSWORD") || undefined;

export const REDIS_DB = Config.get("REDIS.DB") || 0;
