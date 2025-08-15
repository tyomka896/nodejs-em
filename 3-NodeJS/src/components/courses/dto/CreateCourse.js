export const CreateCourseSchema = {
    type: "object",
    required: ["title"],
    properties: {
        title: {
            type: "string",
            minLength: 3,
            maxLength: 255,
        },
        about: {
            type: "string",
            maxLength: 1000,
        },
    },
};
