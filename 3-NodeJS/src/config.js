// TODO: split to multiple files
import Config from "config";

export const APP_PORT = Config.get("APP.PORT");

export const APP_KEY = Config.get("APP.KEY");

export const APP_TOKEN_SECRET = Config.get("APP.TOKEN_SECRET");

export const APP_REFRESH_SECRET = Config.get("APP.REFRESH_SECRET");

export const DATABASE_HOST = Config.get("DATABASE.HOST");

export const DATABASE_PORT = Config.get("DATABASE.PORT");

export const DATABASE_NAME = Config.get("DATABASE.NAME");

export const DATABASE_USER = Config.get("DATABASE.USER");

export const DATABASE_PASSWORD = Config.get("DATABASE.PASSWORD");

export const REDIS_HOST = Config.get("REDIS.HOST");

export const REDIS_PORT = Config.get("REDIS.PORT");

export const REDIS_PASSWORD = Config.get("REDIS.PASSWORD") || undefined;

export const REDIS_DB = Config.get("REDIS.DB");
