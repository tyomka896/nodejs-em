export const GetUsersSchema = {
    type: "object",
    required: [],
    additionalProperties: false,
    properties: {
        page: {
            type: "integer",
            minimum: 1,
        },
        limit: {
            type: "integer",
            minimum: 1,
            maximum: 50,
        },
    },
};
