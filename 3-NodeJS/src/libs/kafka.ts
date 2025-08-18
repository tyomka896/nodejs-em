import { Kafka } from "kafkajs";

import { AuditData } from "#types/kafka";
import { KAFKA_BROKERS, KAFKA_CLIENT_ID } from "#config/kafka.ts";

const kafka = new Kafka({
    clientId: KAFKA_CLIENT_ID,
    brokers: KAFKA_BROKERS,
});

const producer = kafka.producer();

export async function sendLog(data: AuditData, topic: string = "main-topic") {
    await producer.connect();

    await producer.send({
        topic: topic,
        messages: [{ value: JSON.stringify(data) }],
    });

    await producer.disconnect();
}
