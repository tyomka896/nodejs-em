import JWT from "jsonwebtoken";

import { redis } from "#libs/redis.js";
import { connection } from "#libs/database.js";
import { APP_REFRESH_SECRET, APP_TOKEN_SECRET } from "#config/app.js";

export async function RefreshTokenService(refreshToken) {
    let payload;

    try {
        payload = JWT.verify(refreshToken, APP_REFRESH_SECRET);
    } catch (e) {
        return null;
    }

    const user = await connection.oneOrNone(
        "SELECT id, name, surname, email, refresh_token FROM users WHERE id = $1",
        [payload.sub],
    );

    if (!user || user.refresh_token !== refreshToken) {
        return null;
    }

    const newAccessToken = JWT.sign(
        { sub: user.id },
        APP_TOKEN_SECRET,
        { expiresIn: "2h" },
    );

    const newRefreshToken = JWT.sign(
        { sub: user.id },
        APP_REFRESH_SECRET,
        { expiresIn: "30d" },
    );

    await connection.none(
        "UPDATE users SET refresh_token = $1 WHERE id = $2",
        [newRefreshToken, user.id],
    );

    const userData = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
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
