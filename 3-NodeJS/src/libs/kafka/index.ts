import { AuditData } from "#types/kafka";
import { Connection, KafkaConnection } from "./connection.ts";

class KafkaProducer {
    readonly conn: Connection = new KafkaConnection();

    constructor() {}

    async sendLog(
        data: AuditData,
        topic: string = "main-topic",
    ): Promise<void> {
        await this.conn.connect();

        try {
            await this.conn.producer.send({
                topic: topic,
                messages: [{ value: JSON.stringify(data) }],
            });
        } catch (error) {
            console.error("Failed to send message:", error);

            throw error;
        }
    }
}

export const kafkaService = new KafkaProducer();

process.on("SIGTERM", () => kafkaService.conn.disconnect());
process.on("SIGINT", () => kafkaService.conn.disconnect());
