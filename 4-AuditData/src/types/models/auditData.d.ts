export type Role = "student" | "mentor" | "admin";

export interface Attributes {
    id: number;
    url: string;
    method: string;
    user_id: number | null;
    user_role: Role | null;
    description: string;
    created_at: Date;
}

export interface Model extends Attributes {}

type CreateOmit =
    | "id"
    | "created_at";

export interface Create extends Omit<Attributes, CreateOmit> {
    created_at?: Date;
}

export type Update = Partial<Create>;
