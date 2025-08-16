import { NextFunction, Request, Response } from "express";

import { UnauthorizedError } from "#errors/index.ts";
import { GetSessionService } from "#components/auth/services/GetSession.ts";
import { UserTypes } from "#types/index.ts";

export async function AuthMiddleware(
    req: Request,
    _: Response,
    next: NextFunction,
): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new UnauthorizedError("No authorization header");
    }

    const session: UserTypes.Model | null = await GetSessionService(
        authorization,
    );

    if (!session) {
        throw new UnauthorizedError("Invalid or expired token");
    }

    req.state = { user: session };

    return next();
}
