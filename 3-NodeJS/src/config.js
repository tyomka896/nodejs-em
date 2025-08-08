import Config from "config";

export const SERVER_PORT = Config.get("SERVER.PORT");

export const DATABASE_HOST = Config.get("DATABASE.HOST");

export const DATABASE_PORT = Config.get("DATABASE.PORT");

export const DATABASE_NAME = Config.get("DATABASE.NAME");

export const DATABASE_USER = Config.get("DATABASE.USER");

export const DATABASE_PASSWORD = Config.get("DATABASE.PASSWORD");
