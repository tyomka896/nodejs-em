import { User } from "#models/User.ts";
import { UsersService } from "#types/index.ts";

export async function UpdateUserService(
    args: UsersService.UpdateUserArgs,
): Promise<boolean> {
    const { id, name, surname } = args;

    const [affectedCount] = await User.update(
        { name, surname },
        { where: { id } },
    );

    return affectedCount >= 1;
}
