import { BaseError } from "./BaseError.js";

export class ValidationError extends BaseError {
    constructor(message = "Unprocessable Entity") {
        super(message, 422);
    }
}
