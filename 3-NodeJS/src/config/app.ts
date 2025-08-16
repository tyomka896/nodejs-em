import Config from "config";

export const APP_PORT: number = Config.has("APP.PORT")
    ? Config.get<number>("APP.PORT")
    : 3000;

export const APP_KEY: string = Config.has("APP.KEY")
    ? Config.get<string>("APP.KEY")
    : "APP_KEY";

export const APP_TOKEN_SECRET: string = Config.has("APP.TOKEN_SECRET")
    ? Config.get<string>("APP.TOKEN_SECRET")
    : "APP_TOKEN_SECRET";

export const APP_REFRESH_SECRET: string = Config.has("APP.REFRESH_SECRET")
    ? Config.get<string>("APP.REFRESH_SECRET")
    : "APP_REFRESH_SECRET";
