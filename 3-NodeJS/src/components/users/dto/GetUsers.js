import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
});

const schema = {
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

export const GetUsersValidate = ajv.compile(schema);
