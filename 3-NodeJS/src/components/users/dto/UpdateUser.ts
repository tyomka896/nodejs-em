import { JSONSchemaType } from "ajv";

export interface UpdateUserData {
    name: string;
    surname: string;
}

export const UpdateUserSchema: JSONSchemaType<UpdateUserData> = {
    type: "object",
    required: ["name", "surname"],
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
    },
};
