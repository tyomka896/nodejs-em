import { Kafka, Producer } from "kafkajs";

import { KAFKA_BROKERS, KAFKA_CLIENT_ID } from "#config/kafka.ts";

export interface Connection {
    readonly producer: Producer;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

export class KafkaConnection implements Connection {
    private _producer: Producer;
    private conn: Promise<void> | null = null;

    constructor() {
        const kafka = new Kafka({
            clientId: KAFKA_CLIENT_ID,
            brokers: KAFKA_BROKERS,
        });

        this._producer = kafka.producer();
    }

    get producer(): Producer {
        return this._producer;
    }

    async connect(): Promise<void> {
        if (!this.conn) {
            this.conn = this._producer
                .connect()
                .catch((error) => {
                    this.conn = null;

                    console.error("Kafka connection failed:", error);

                    throw error;
                });
        }

        return this.conn;
    }

    async disconnect(): Promise<void> {
        if (!this.conn) {
            return;
        }

        try {
            await this.conn;
            await this._producer.disconnect();
        } catch (error) {
            console.error("Error during disconnect:", error);
        } finally {
            this.conn = null;
        }
    }
}
