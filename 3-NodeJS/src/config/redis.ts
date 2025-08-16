import Config from "config";

export const REDIS_HOST: string = Config.has("REDIS.HOST")
    ? Config.get<string>("REDIS.HOST")
    : "localhost";

export const REDIS_PORT: number = Config.has("REDIS.PORT")
    ? Config.get<number>("REDIS.PORT")
    : 6379;

export const REDIS_PASSWORD: string | undefined = Config.has("REDIS.PASSWORD")
    ? Config.get<string>("REDIS.PASSWORD")
    : undefined;

export const REDIS_DB: number = Config.has("REDIS.DB")
    ? Config.get<number>("REDIS.DB")
    : 0;
