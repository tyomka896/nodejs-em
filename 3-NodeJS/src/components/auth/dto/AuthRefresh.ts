import { JSONSchemaType } from "ajv";

export interface AuthRefreshData {
    refreshToken: string;
}

export const AuthRefreshSchema: JSONSchemaType<AuthRefreshData> = {
    type: "object",
    required: ["refreshToken"],
    properties: {
        refreshToken: { type: "string" },
    },
};
