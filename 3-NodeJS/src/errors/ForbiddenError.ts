import { BaseError } from "./BaseError.ts";

export class ForbiddenError extends BaseError {
    constructor(message: string = "Forbidden") {
        super(message, 403);
    }
}
