import { ErrorTypes } from "#types/index.ts";

export class BaseError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }

    getInfo(): ErrorTypes.BaseErrorInfo {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
            stack: this.stack,
        };
    }

    toObject(): ErrorTypes.BaseErrorObject {
        return {
            error: this.message,
            statusCode: this.statusCode,
        };
    }
}
