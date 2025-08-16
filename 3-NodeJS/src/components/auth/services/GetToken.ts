import JWT from "jsonwebtoken";

import { User } from "#models/User.ts";
import { redis } from "#libs/redis.ts";
import { UserTypes } from "#types/index.ts";
import { AuthService } from "#types/index.ts";
import { APP_REFRESH_SECRET, APP_TOKEN_SECRET } from "#config/app.ts";

export async function GetTokenService(
    user: UserTypes.Model,
): Promise<AuthService.TokenResult> {
    const token: string = JWT.sign(
        { sub: user.id },
        APP_TOKEN_SECRET,
        { expiresIn: "2h" },
    );

    const refreshToken: string = JWT.sign(
        { sub: user.id },
        APP_REFRESH_SECRET,
        { expiresIn: "30d" },
    );

    await User.update(
        { refresh_token: refreshToken },
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
        `token_${token}`,
        JSON.stringify(userData),
        "EX",
        2 * 60 * 60,
    );

    return {
        token,
        refreshToken,
    };
}
