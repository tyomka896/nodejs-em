export const UpdateUsersSchema = {
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
