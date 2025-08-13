import sha256 from "#helpers/sha256.js";
import { connection } from "#libs/database.js";

export async function CreateUsersService(usersData) {
    const { name, surname, password, email } = usersData;

    const hashPassword = sha256(password);

    await connection.none(
        "INSERT INTO users (name, surname, password, email) VALUES ($1, $2, $3, $4)",
        [name, surname, hashPassword, email],
    );

    return true;
}
