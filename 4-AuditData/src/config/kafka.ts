export const KAFKA_BROKERS: string[] =
    (Deno.env.get("KAFKA_BROKERS") ?? "localhost:9092").split(",");

export const KAFKA_CLIENT_ID: string = Deno.env.get("KAFKA_CLIENT_ID") ??
    "consumer-client-id";

export const KAFKA_GROUP_ID: string = Deno.env.get("KAFKA_GROUP_ID") ??
    "consumer-group-id";

export const KAFKA_TOPIC: string = Deno.env.get("KAFKA_TOPIC") ??
    "consumer-topic";
