export const EnrollUserSchema = {
    type: "object",
    required: ["userId"],
    properties: {
        userId: { type: "integer" },
    },
};
