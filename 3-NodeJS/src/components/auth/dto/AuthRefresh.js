export const AuthRefreshSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        refreshToken: { type: "string" },
    },
};
