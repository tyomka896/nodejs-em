import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
});

export class BaseController {
    constructor() {
        this.controller = this.controller.bind(this);
        this.run = this.run.bind(this);
        this.validate = this.validate.bind(this);
    }

    get bodySchema() {
        return null;
    }

    get querySchema() {
        return null;
    }

    async controller(req) {
        throw new SyntaxError("Method Controller required");
    }

    #buildRequestError(error) {
        const { params, instancePath, message } = error;

        return { [instancePath || params?.missingProperty]: message };
    }

    compileSchema(schema) {
        return ajv.compile(schema);
    }

    validate(req) {
        if (this.bodySchema) {
            console.log("body");

            const validate = this.compileSchema(this.bodySchema);

            if (!validate(req.body)) {
                return {
                    error: "Invalid body parameters",
                    messages: validate.errors
                        .map(this.#buildRequestError),
                };
            }
        } else if (this.querySchema) {
            const validate = this.compileSchema(this.querySchema);

            if (!validate(req.query)) {
                return {
                    error: "Invalid query parameters",
                    messages: validate.errors
                        .map(this.#buildRequestError),
                };
            }
        }

        return {};
    }

    async run(req, res) {
        const errorsList = this.validate(req);

        if (Object.keys(errorsList).length > 0) {
            return res.status(400).send(errorsList);
        }

        const result = await this.controller(req);

        res.status(200).send(result);
    }
}

export default BaseController;
