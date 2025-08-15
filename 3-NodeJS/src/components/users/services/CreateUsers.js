import { User } from "#models/User.js";
import sha256 from "#helpers/sha256.js";
import { ValidationError } from "#errors/index.js";

export async function CreateUsersService(usersData) {
    const { name, surname, password, email } = usersData;

    const userExists = await User.findOne({ where: { email } });

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
