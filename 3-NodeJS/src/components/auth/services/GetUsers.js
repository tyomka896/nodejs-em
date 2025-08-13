import sha256 from "#helpers/sha256.js";
import { connection } from "#libs/database.js";

export async function GetUsersService({ email, password }) {
    if (!email || !password) {
        throw new Error("Missing required fields");
    }

    const user = await connection.oneOrNone(
        "SELECT * FROM users WHERE email = $1",
        [email],
    );

    if (!user || user.password !== sha256(password)) {
        return null;
    }

    return user;
}
