import { BaseError } from "./BaseError.ts";

export class NotFoundError extends BaseError {
    constructor(message: string = "Not Found") {
        super(message, 404);
    }
}
