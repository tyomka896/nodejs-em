import Config from "config";

export const APP_PORT = Config.get("APP.PORT");

export const APP_KEY = Config.get("APP.KEY");

export const APP_TOKEN_SECRET = Config.get("APP.TOKEN_SECRET");

export const APP_REFRESH_SECRET = Config.get("APP.REFRESH_SECRET");
