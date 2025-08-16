import Config from "config";

export const DATABASE_HOST: string = Config.has("DATABASE.HOST")
    ? Config.get<string>("DATABASE.HOST")
    : "localhost";

export const DATABASE_PORT: number = Config.has("DATABASE.PORT")
    ? Config.get<number>("DATABASE.PORT")
    : 5432;

export const DATABASE_NAME: string = Config.has("DATABASE.NAME")
    ? Config.get<string>("DATABASE.NAME")
    : "postgres";

export const DATABASE_USER: string = Config.has("DATABASE.USER")
    ? Config.get<string>("DATABASE.USER")
    : "postgres";

export const DATABASE_PASSWORD: string = Config.has("DATABASE.PASSWORD")
    ? Config.get<string>("DATABASE.PASSWORD")
    : "postgres";
