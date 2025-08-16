import { JSONSchemaType } from "ajv";

export interface AuthData {
    email: string;
    password: string;
}

export const AuthSchema: JSONSchemaType<AuthData> = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: { type: "string", format: "email" },
        password: { type: "string" },
    },
};
