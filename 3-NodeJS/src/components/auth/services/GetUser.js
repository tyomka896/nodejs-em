import { User } from "#models/User.js";
import sha256 from "#helpers/sha256.js";

export async function GetUserService({ email, password }) {
    if (!email || !password) {
        throw new Error("Missing required fields");
    }

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== sha256(password)) {
        return null;
    }

    return user;
}
