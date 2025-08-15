import { BaseError } from "#errors/BaseError.js";

export async function ErrorMiddleware(error, _req, res, _next) {
    const stack = process.env.NODE_ENV === "development"
        ? error.stack
        : undefined;

    if (error instanceof BaseError) {
        return res.status(error.statusCode).json({
            ...error.toObject(),
            stack,
        });
    }

    res.status(500).json({
        error: "Internal Server Error",
        status: 500,
        stack,
    });
}
