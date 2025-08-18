import { EachMessagePayload } from "kafkajs";
import { AuditData } from "@src/types/index.d.ts";
import { controller } from "@src/http/controllers/index.ts";

export async function eachMessage(
    payload: EachMessagePayload,
): Promise<void> {
    const { message } = payload;

    let data: AuditData;

    try {
        const value: string | undefined = message.value?.toString("utf-8");

        if (!value) {
            return;
        }

        data = JSON.parse(value) as AuditData;
    } catch {
        return;
    }

    await controller.auditData
        .create(data)
        .catch(() => {});
}
