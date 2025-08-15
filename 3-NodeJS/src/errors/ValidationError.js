import { BaseError } from "./BaseError.js";

export class ValidationError extends BaseError {
    constructor(messages, message = "Unprocessable Entity") {
        super(message, 422);

        this.messages = messages;
    }

    toObject() {
        return {
            error: this.message,
            statusCode: this.statusCode,
            messages: this.messages,
        };
    }
}
