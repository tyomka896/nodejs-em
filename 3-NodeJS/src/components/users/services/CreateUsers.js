import { connection } from "#libs/database.js";

export async function CreateUsersService(usersData) {
    const { name, surname, password, email } = usersData;

    const hashPassword = password;

    await connection.none(
        "INSERT INTO users (name, surname, password, email) VALUES ($1, $2, $3, $4)",
        [name, surname, hashPassword, email],
    );

    return true;
}
