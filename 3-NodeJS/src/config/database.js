import Config from "config";

export const DATABASE_HOST = Config.get("DATABASE.HOST") || "localhost";

export const DATABASE_PORT = Config.get("DATABASE.PORT") || 5432;

export const DATABASE_NAME = Config.get("DATABASE.NAME") || "postgres";

export const DATABASE_USER = Config.get("DATABASE.USER") || "postgres";

export const DATABASE_PASSWORD = Config.get("DATABASE.PASSWORD") || "postgres";
