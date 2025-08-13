import Config from "config";

export const REDIS_HOST = Config.get("REDIS.HOST");

export const REDIS_PORT = Config.get("REDIS.PORT");

export const REDIS_PASSWORD = Config.get("REDIS.PASSWORD") || undefined;

export const REDIS_DB = Config.get("REDIS.DB");
