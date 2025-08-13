import JWT from "jsonwebtoken";

import { redis } from "#libs/redis.js";
import { connection } from "#libs/database.js";
import { APP_REFRESH_SECRET, APP_TOKEN_SECRET } from "#config/app.js";

export async function GetTokensService(user) {
    const token = JWT.sign(
        { sub: user.id },
        APP_TOKEN_SECRET,
        { expiresIn: "2h" },
    );

    const refreshToken = JWT.sign(
        { sub: user.id },
        APP_REFRESH_SECRET,
        { expiresIn: "30d" },
    );

    await connection.none(
        "UPDATE users SET refresh_token = $1 WHERE id = $2",
        [refreshToken, user.id],
    );

    const userData = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
    };

    await redis.set(
        `token_${token}`,
        JSON.stringify(userData),
        "EX",
        2 * 60 * 60,
    );

    return { token, refreshToken };
}
