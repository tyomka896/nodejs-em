import { NextFunction, Request, Response } from "express";

import { BaseError } from "#errors/BaseError.ts";

export async function ErrorMiddleware(
    error: Error,
    _: Request,
    res: Response,
    __: NextFunction,
) {
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
