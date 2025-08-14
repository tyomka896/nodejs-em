import { BaseError } from "./BaseError.js";

export class NotFoundError extends BaseError {
    constructor(message = "Not Found") {
        super(message, 404);
    }
}
