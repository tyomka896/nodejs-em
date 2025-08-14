import sha256 from "#helpers/sha256.js";
import { connection } from "#libs/database.js";
import { ValidationError } from "#errors/index.js";

export async function CreateUsersService(usersData) {
    const { name, surname, password, email } = usersData;

    const userExists = await connection.oneOrNone(
        "SELECT id FROM users WHERE email = $1",
        [email],
    );

    if (userExists) {
        throw new ValidationError("Пользователь с таким email уже существует");
    }

    const hashPassword = sha256(password);

    await connection.none(
        "INSERT INTO users (name, surname, password, email) VALUES ($1, $2, $3, $4)",
        [name, surname, hashPassword, email],
    );

    return true;
}
