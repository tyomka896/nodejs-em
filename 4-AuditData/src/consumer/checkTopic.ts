import { Kafka } from "kafkajs";

export async function checkTopic(kafka: Kafka, topic: string): Promise<void> {
    const admin = kafka.admin();

    await admin.connect();

    const topics: string[] = await admin.listTopics();

    if (!topics.includes(topic)) {
        await admin.createTopics({ topics: [{ topic }] });
    }

    await admin.disconnect();
}
