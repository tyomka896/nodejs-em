import { BaseError } from "./BaseError.ts";

export class BadRequestError extends BaseError {
    constructor(message: string = "Bad Request") {
        super(message, 400);
    }
}
