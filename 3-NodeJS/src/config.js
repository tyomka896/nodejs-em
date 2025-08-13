// TODO: split to multiple files
import Config from "config";

export const AUTH_TOKEN_KEY = Config.get("AUTH.TOKEN_KEY");

export const AUTH_REFRESH_KEY = Config.get("AUTH.REFRESH_KEY");

export const SERVER_PORT = Config.get("SERVER.PORT");

export const DATABASE_HOST = Config.get("DATABASE.HOST");

export const DATABASE_PORT = Config.get("DATABASE.PORT");

export const DATABASE_NAME = Config.get("DATABASE.NAME");

export const DATABASE_USER = Config.get("DATABASE.USER");

export const DATABASE_PASSWORD = Config.get("DATABASE.PASSWORD");

export const REDIS_HOST = Config.get("REDIS.HOST");

export const REDIS_PORT = Config.get("REDIS.PORT");

export const REDIS_PASSWORD = Config.get("REDIS.PASSWORD") || undefined;

export const REDIS_DB = Config.get("REDIS.DB");
