import { JSONSchemaType } from "ajv";

import { UserTypes } from "#types/index.ts";

export interface GetUserData {
    role?: UserTypes.Role;
    page?: number;
    limit?: number;
}

export const GetUserSchema: JSONSchemaType<GetUserData> = {
    type: "object",
    required: [],
    properties: {
        role: {
            type: "string",
            enum: ["admin", "mentor", "student"],
            nullable: true,
        },
        page: {
            type: "integer",
            minimum: 1,
            nullable: true,
        },
        limit: {
            type: "integer",
            minimum: 1,
            maximum: 50,
            nullable: true,
        },
    },
};
