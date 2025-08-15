import { UnauthorizedError } from "#errors/index.js";
import { GetSessionService } from "#components/auth/services/GetSession.js";

export async function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new UnauthorizedError("No authorization header");
    }

    const session = await GetSessionService(authorization);

    if (!session) {
        throw new UnauthorizedError("Invalid or expired token");
    }

    req.state = { user: session };

    return next();
}
