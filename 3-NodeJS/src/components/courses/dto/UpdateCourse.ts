import { JSONSchemaType } from "ajv";

export interface UpdateCourseData {
    title?: string;
    about?: string;
}

export const UpdateCourseSchema: JSONSchemaType<UpdateCourseData> = {
    type: "object",
    required: [],
    properties: {
        title: {
            type: "string",
            minLength: 3,
            maxLength: 150,
            nullable: true,
        },
        about: {
            type: "string",
            maxLength: 1000,
            nullable: true,
        },
    },
};
