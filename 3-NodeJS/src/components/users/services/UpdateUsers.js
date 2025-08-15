import { User } from "#models/User.js";

export async function UpdateUserService({ id, name, surname }) {
    const [affectedCount] = await User.update(
        { name, surname },
        { where: { id } },
    );

    return affectedCount >= 1;
}
