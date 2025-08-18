import "jsr:@std/dotenv/load";

import { runConsumer } from "./consumer/index.ts";

async function main(): Promise<void> {
    try {
        await runConsumer();
    } catch (error) {
        console.error("❌ Failed to start Kafka consumer:", error);

        throw error;
    }

    console.log("🚀 Application started successfully");
}

main();
