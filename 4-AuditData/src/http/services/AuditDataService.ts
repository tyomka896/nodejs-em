import { AuditData } from "@src/http/models/AuditData.ts";
import { AuditDataTypes } from "@src/types/index.d.ts";

export async function create(
    data: AuditDataTypes.Create,
): Promise<AuditDataTypes.Model> {
    return await AuditData.create(data);
}
