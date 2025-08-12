export const CreateUsersSchema = {
    type: "object",
    required: ["name", "surname", "password", "email"],
    additionalProperties: false,
    properties: {
        name: { type: "string" },
        surname: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password" },
    },
};
