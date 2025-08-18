import { NextFunction, Request, Response } from "express";
import { ErrorObject, FormatDefinition, ValidateFunction } from "ajv";

import ajv from "#helpers/ajv.ts";
import { ValidationError } from "#errors/index.ts";
import { ValidationResult } from "#types/index.ts";

export class Controller<T> {
    protected ajv: typeof ajv;

    constructor() {
        this.ajv = ajv;
        this.controller = this.controller.bind(this);
        this.run = this.run.bind(this);
        this.validate = this.validate.bind(this);
    }

    addFormat(
        name: string,
        formatObj: FormatDefinition<string | number>,
    ): void {
        this.ajv.addFormat(name, formatObj);
    }

    // TODO: add paramSchema validation

    get bodySchema(): object | null {
        return null;
    }

    get querySchema(): object | null {
        return null;
    }

    private buildRequestError(error: ErrorObject): Record<string, string> {
        const { params, instancePath, message } = error;

        const key: string = instancePath ||
            params?.missingProperty ||
            "unknown";

        return { [key]: message || "Unknown error" };
    }

    validate(req: Request): ValidationResult {
        const errors: Array<Record<string, string>> = [];
        const errorTypes: string[] = [];

        const schemas: [object | null, any, string][] = [
            [this.bodySchema, req.body, "body"],
            [this.querySchema, req.query, "query"],
        ];

        for (const [schema, data, type] of schemas) {
            if (!schema) {
                continue;
            }

            const validate: ValidateFunction = this.ajv.compile(schema);

            if (validate(data)) {
                continue;
            }

            errorTypes.push(`Invalid ${type} parameters`);
            errors.push(...(validate.errors ?? []).map(this.buildRequestError));
        }

        if (errors.length === 0) {
            return {};
        }

        return {
            error: errorTypes.join(" and "),
            messages: errors,
        };
    }

    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        const validated: ValidationResult = this.validate(req);

        if (Object.keys(validated).length > 0) {
            const { error, messages } = validated as {
                error: string;
                messages: Record<string, string>[];
            };

            throw new ValidationError(messages, error);
        }

        try {
            const result: T = await this.controller(req);

            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }

    async controller(_: Request): Promise<T> {
        throw new SyntaxError("Method Controller required");
    }
}

export default Controller;
