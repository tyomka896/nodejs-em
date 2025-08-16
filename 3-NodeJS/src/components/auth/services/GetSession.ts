import JWT, { JwtPayload } from "jsonwebtoken";

import { User } from "#models/User.ts";
import { redis } from "#libs/redis.ts";
import { APP_TOKEN_SECRET } from "#config/app.ts";
import { UserTypes } from "#types/index.ts";

export async function GetSessionService(
    token: string,
): Promise<UserTypes.Model | null> {
    const parts: string[] = token.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return null;
    }

    const tokenValue: string = parts[1];

    const cached: string | null = await redis.get(`token_${tokenValue}`);

    if (cached) {
        try {
            return JSON.parse(cached);
        } catch (e) {
            await redis.del(`token_${tokenValue}`);
        }
    }

    let payload: JwtPayload | string;

    try {
        payload = JWT.verify(tokenValue, APP_TOKEN_SECRET);
    } catch (e) {
        return null;
    }

    if (typeof payload !== "object" || !("sub" in payload)) {
        return null;
    }

    const user: UserTypes.Model | null = await User.findByPk(payload.sub);

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
