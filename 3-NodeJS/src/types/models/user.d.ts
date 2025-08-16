import { CourseTypes } from "#types/index.d.ts";

export type Role = "student" | "mentor" | "admin";

export interface Attributes {
    id: number;
    role: Role;
    name: string;
    surname: string;
    password: string;
    email: string;
    refresh_token: string | null;
    created_at: Date;
    updated_at: Date;
}

export interface Model extends Attributes {
    courses?: CourseTypes.Model[];
    toJSON();
}

export interface PublicModel
    extends Omit<Model, "password" | "refresh_token"> {}

type CreateOmit =
    | "id"
    | "role"
    | "created_at"
    | "updated_at"
    | "refresh_token";

export interface Create extends Omit<Attributes, CreateOmit> {
    role?: Role;
}

export type Update = Partial<Create>;
