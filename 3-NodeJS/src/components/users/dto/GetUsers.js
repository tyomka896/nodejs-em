export const GetUsersSchema = {
    type: "object",
    required: [],
    properties: {
        role: {
            type: "string",
            enum: ["admin", "mentor", "student"],
        },
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
