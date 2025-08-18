import dayjs from "@src/utils/dayjs.ts";
import { service } from "../services/index.ts";
import { AuditData } from "@src/types/index.d.ts";
import { AuditDataTypes } from "@src/types/index.d.ts";

export async function create(
    data: AuditData,
): Promise<AuditDataTypes.Model> {
    const { timestamp, user_id, user_role } = data;

    const createdAt: Date = dayjs(timestamp).toDate();

    return await service.auditData.create({
        ...data,
        user_id: user_id || null,
        user_role: user_role as AuditDataTypes.Role || null,
        created_at: createdAt,
    });
}
