import { BaseError } from "#errors/BaseError.js";

export async function ErrorMiddleware(error, _req, res, _next) {
    if (error instanceof BaseError) {
        const stack = process.env.NODE_ENV === "development"
            ? error.stack
            : undefined;

        return res.status(error.statusCode).json({
            ...error.toObject(),
            stack,
        });
    }

    console.log(error);

    res.status(500).json({
        error: "Internal Server Error",
        status: 500,
    });
}
