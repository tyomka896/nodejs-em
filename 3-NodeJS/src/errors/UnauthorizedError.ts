import { BaseError } from "./BaseError.ts";

export class UnauthorizedError extends BaseError {
    constructor(message: string = "Unauthorized") {
        super(message, 401);
    }
}
