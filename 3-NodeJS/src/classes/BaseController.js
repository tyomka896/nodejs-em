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
        const errorsList = {
            error: "Invalid parameters",
            messages: [],
        };

        if (this.bodySchema) {
            const validate = this.compileSchema(this.bodySchema);

            if (!validate(req.body)) {
                errorsList.error = "Invalid body parameters";
                errorsList.messages = validate.errors
                    .map(this.#buildRequestError);
            }
        }

        if (this.querySchema) {
            const validate = this.compileSchema(this.querySchema);

            if (!validate(req.query)) {
                errorsList.error = "Invalid query parameters";
                errorsList.messages = validate.errors
                    .map(this.#buildRequestError);
            }
        }

        return errorsList;
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
