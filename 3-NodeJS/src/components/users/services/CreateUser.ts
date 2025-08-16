import { User } from "#models/User.ts";
import sha256 from "#helpers/sha256.ts";
import { ValidationError } from "#errors/index.ts";
import { UsersService, UserTypes } from "#types/index.ts";

export async function CreateUserService(
    args: UsersService.CreateUserArgs,
): Promise<UserTypes.Model> {
    const { name, surname, password, email } = args;

    const userExists: UserTypes.Model | null = await User
        .findOne({ where: { email } });

    if (userExists) {
        throw new ValidationError("Пользователь с таким email уже существует");
    }

    return await User.create({
        name,
        surname,
        password: sha256(password),
        email,
    });
}
