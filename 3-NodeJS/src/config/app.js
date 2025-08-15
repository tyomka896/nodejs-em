import Config from "config";

export const APP_PORT = Config.get("APP.PORT") || 3000;

export const APP_KEY = Config.get("APP.KEY") || "APP_KEY";

export const APP_TOKEN_SECRET = Config.get("APP.TOKEN_SECRET") ||
    "APP_TOKEN_SECRET";

export const APP_REFRESH_SECRET = Config.get("APP.REFRESH_SECRET") ||
    "APP_REFRESH_SECRET";
