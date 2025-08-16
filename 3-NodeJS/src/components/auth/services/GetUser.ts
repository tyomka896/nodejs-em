import sha256 from "#helpers/sha256.ts";
import { User } from "#models/User.ts";
import { AuthService, UserTypes } from "#types/index.ts";
import { NotFoundError, ValidationError } from "#errors/index.ts";

export async function GetUserService(
    args: AuthService.GetUserArgs,
): Promise<UserTypes.Model> {
    const { email, password } = args;

    const user: UserTypes.Model | null = await User
        .findOne({
            where: { email },
            attributes: { include: ["password", "refresh_token"] },
        });

    if (!user) {
        throw new NotFoundError(`User with email '${email}' not found`);
    }

    if (!user || user.password !== sha256(password)) {
        throw new ValidationError("Invalid email and password");
    }

    return user;
}
