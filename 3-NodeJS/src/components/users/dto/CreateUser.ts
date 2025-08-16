import { JSONSchemaType } from "ajv";

export interface CreateUserData {
    name: string;
    surname: string;
    password: string;
    email: string;
}

export const CreateUserSchema: JSONSchemaType<CreateUserData> = {
    type: "object",
    required: ["name", "surname", "password", "email"],
    properties: {
        name: {
            type: "string",
            minLength: 3,
            maxLength: 100,
        },
        surname: {
            type: "string",
            minLength: 3,
            maxLength: 100,
        },
        email: {
            type: "string",
            format: "email",
        },
        password: {
            type: "string",
            format: "password",
        },
    },
};
