export interface Attributes {
    user_id: number;
    course_id: number;
    created_at: Date;
}

export interface Model extends Attributes {}

type CreateOmit = "created_at";

export interface Create extends Omit<Attributes, CreateOmit> {}

export type Update = Partial<Create>;
