import ajv from "#helpers/ajv.js";
import { ValidationError } from "#errors/index.js";

export class Controller {
    constructor() {
        this.ajv = ajv;
        this.controller = this.controller.bind(this);
        this.run = this.run.bind(this);
        this.validate = this.validate.bind(this);
    }

    addFormat(name, formatObj) {
        this.ajv.addFormat(name, formatObj);
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

    validate(req) {
        if (this.bodySchema) {
            const validate = this.ajv.compile(this.bodySchema);

            if (!validate(req.body)) {
                return {
                    error: "Invalid body parameters",
                    messages: validate.errors
                        .map(this.#buildRequestError),
                };
            }
        } else if (this.querySchema) {
            const validate = this.ajv.compile(this.querySchema);

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

    async run(req, res, next) {
        const validated = this.validate(req);

        if (Object.keys(validated).length > 0) {
            const { error, messages } = validated;

            throw new ValidationError(messages, error);
        }

        try {
            const result = await this.controller(req);

            return res.status(200).send(result);
        } catch (error) {
            return next(error);
        }
    }
}

export default Controller;
