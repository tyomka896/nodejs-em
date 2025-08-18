import Config from "config";

export const KAFKA_BROKERS: string[] = Config.has("KAFKA.BROKERS")
    ? Config.get<string[]>("KAFKA.BROKERS")
    : ["localhost:9092"];

export const KAFKA_CLIENT_ID: string = Config.has("KAFKA.CLIENT_ID")
    ? Config.get<string>("KAFKA.CLIENT_ID")
    : "producer-client-id";
