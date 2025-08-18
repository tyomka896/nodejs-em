export interface AuditData {
    url: string;
    method: string;
    user_id?: number;
    user_role?: string;
    description: string;
    timestamp: string;
}
