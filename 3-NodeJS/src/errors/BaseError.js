export class BaseError extends Error {
    constructor(message, statusCode = 500) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    getInfo() {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
            stack: this.stack,
        };
    }

    toObject() {
        return {
            error: this.message,
            statusCode: this.statusCode,
        };
    }
}
