export const UpdateCourseSchema = {
    type: "object",
    required: [],
    properties: {
        title: {
            type: "string",
            minLength: 3,
            maxLength: 150,
        },
        about: {
            type: "string",
            maxLength: 1000,
        },
    },
};
