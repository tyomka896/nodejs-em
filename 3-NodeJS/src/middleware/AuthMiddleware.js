import { GetSessionService } from "#components/auth/services/GetSession.js";

export async function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401)
            .json({ error: "No authorization header" });
    }

    const session = await GetSessionService(authorization);

    if (!session) {
        return res.status(401)
            .json({ error: "Invalid or expired token" });
    }

    req.state = { user: session };

    return next();
}
