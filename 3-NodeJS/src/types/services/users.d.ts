import { UserTypes } from "#types/index.d.ts";

export interface CreateUserArgs {
    name: string;
    surname: string;
    password: string;
    email: string;
}

export interface GetUserArgs {
    page?: number;
    limit?: number;
    role?: UserTypes.Role;
}

export interface UpdateUserArgs {
    id: number;
    name: string;
    surname: string;
}
