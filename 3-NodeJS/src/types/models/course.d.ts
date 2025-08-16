import { UserTypes } from "#types/index.d.ts";

export interface Attributes {
    id: number;
    creator_id: number;
    title: string;
    about: string | null;
    created_at: Date;
    updated_at: Date;
}

export interface Model extends Attributes {
    users?: UserTypes.Model[];
}

type CreateOmit =
    | "id"
    | "about"
    | "created_at"
    | "updated_at";

export interface Create extends Omit<Attributes, CreateOmit> {
    about?: string;
}

export type Update = Partial<Create>;
