import { JSONSchemaType } from "ajv";

export interface EnrollUserData {
    userId: number;
}

export const EnrollUserSchema: JSONSchemaType<EnrollUserData> = {
    type: "object",
    required: ["userId"],
    properties: {
        userId: { type: "integer" },
    },
};
