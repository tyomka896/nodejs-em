import JWT from "jsonwebtoken";

import { User } from "#models/User.js";
import { redis } from "#libs/redis.js";
import { APP_TOKEN_SECRET } from "#config/app.js";

export async function GetSessionService(token) {
    if (!token) {
        return null;
    }

    const parts = token.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return null;
    }

    const tokenValue = parts[1];

    const cached = await redis.get(`token_${tokenValue}`);

    if (cached) {
        try {
            return JSON.parse(cached);
        } catch (e) {
            await redis.del(`token_${tokenValue}`);
        }
    }

    let payload;

    try {
        payload = JWT.verify(tokenValue, APP_TOKEN_SECRET);
    } catch (e) {
        return null;
    }

    const user = await User.findByPk(payload.sub);

    if (!user) {
        return null;
    }

    await redis.set(
        `token_${tokenValue}`,
        JSON.stringify(user),
        "EX",
        2 * 60 * 60,
    );

    return user;
}
