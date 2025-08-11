import Ajv from "ajv";
import ajvFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
ajvFormats(ajv, ["email"]);

ajv.addFormat("password", {
    type: "string",
    validate: (password) => {
        return typeof password === "string" &&
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[@$!%*?&]/.test(password);
    },
});

const schema = {
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

export const CreateUsersValidate = ajv.compile(schema);
