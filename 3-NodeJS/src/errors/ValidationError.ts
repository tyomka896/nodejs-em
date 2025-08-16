import { BaseError } from "./BaseError.ts";
import { ErrorTypes } from "#types/index.ts";

export class ValidationError extends BaseError {
    public messages: string | string[] | Record<string, string>[];

    constructor(
        messages: string | string[] | Record<string, string>[],
        message = "Unprocessable Entity",
    ) {
        super(message, 422);

        this.messages = messages;
    }

    toObject(): ErrorTypes.ValidationErrorObject {
        return {
            error: this.message,
            statusCode: this.statusCode,
            messages: this.messages,
        };
    }
}
