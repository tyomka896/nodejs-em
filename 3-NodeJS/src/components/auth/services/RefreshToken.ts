import JWT, { JwtPayload } from "jsonwebtoken";

import { User } from "#models/User.ts";
import { redis } from "#libs/redis.ts";
import { AuthService, UserTypes } from "#types/index.ts";
import { APP_REFRESH_SECRET, APP_TOKEN_SECRET } from "#config/app.ts";
import {
    NotFoundError,
    UnauthorizedError,
    ValidationError,
} from "#errors/index.ts";

export async function RefreshTokenService(
    refreshToken: string,
): Promise<AuthService.TokenResult> {
    let payload: JwtPayload | string;

    try {
        payload = JWT.verify(refreshToken, APP_REFRESH_SECRET);
    } catch (e) {
        throw new UnauthorizedError();
    }

    if (typeof payload !== "object" || !("sub" in payload)) {
        throw new ValidationError("Invalid token");
    }

    const user: UserTypes.Model | null = await User.findByPk(
        payload.sub,
        { attributes: { include: ["password", "refresh_token"] } },
    );

    if (!user || user.refresh_token !== refreshToken) {
        throw new NotFoundError(`User with id '${payload.sub}' not found`);
    }

    const newAccessToken: string = JWT.sign(
        { sub: user.id },
        APP_TOKEN_SECRET,
        { expiresIn: "2h" },
    );

    const newRefreshToken: string = JWT.sign(
        { sub: user.id },
        APP_REFRESH_SECRET,
        { expiresIn: "30d" },
    );

    await User.update(
        { refresh_token: newRefreshToken },
        { where: { id: user.id } },
    );

    const userData = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
    };

    await redis.set(
        `token_${newAccessToken}`,
        JSON.stringify(userData),
        "EX",
        2 * 60 * 60,
    );

    return {
        token: newAccessToken,
        refreshToken: newRefreshToken,
    };
}
