import { JSONSchemaType } from "ajv";

export interface CreateCourseData {
    title: string;
    about?: string;
}

export const CreateCourseSchema: JSONSchemaType<CreateCourseData> = {
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
            nullable: true,
        },
    },
};
