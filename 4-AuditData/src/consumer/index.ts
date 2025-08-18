import { Consumer, Kafka } from "kafkajs";

import { checkTopic } from "./checkTopic.ts";
import { eachMessage } from "./eachMessage.ts";
import {
    KAFKA_BROKERS,
    KAFKA_CLIENT_ID,
    KAFKA_GROUP_ID,
    KAFKA_TOPIC,
} from "@src/config/kafka.ts";

const kafka: Kafka = new Kafka({
    clientId: KAFKA_CLIENT_ID,
    brokers: KAFKA_BROKERS,
});

const consumer: Consumer = kafka.consumer({
    groupId: KAFKA_GROUP_ID,
});

export async function runConsumer(): Promise<void> {
    await checkTopic(kafka, KAFKA_TOPIC);

    await consumer.connect();

    await consumer.subscribe({
        topic: KAFKA_TOPIC,
        fromBeginning: true,
    });

    await consumer.run({ eachMessage });
}
