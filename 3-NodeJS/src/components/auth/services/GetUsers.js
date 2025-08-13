import { connection } from "#libs/database.js";

export async function GetUsersService({ email, password }) {
    if (!email || !password) {
        throw new Error("Missing required fields");
    }

    // TODO: split to two steps auth
    const user = await connection.oneOrNone(
        "SELECT * FROM users WHERE email = $1 AND password = $2",
        [email, password],
    );

    return user;
}
