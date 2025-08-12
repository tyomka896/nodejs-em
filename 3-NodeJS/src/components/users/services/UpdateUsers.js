import { connection } from "#libs/database.js";

export async function UpdateUser({ id, name, surname }) {
    if (!id || !name || !surname) {
        throw new Error("Missing required fields");
    }

    await connection.none(
        "UPDATE users SET name = $1, surname = $2 WHERE id = $3",
        [name, surname, id],
    );

    return true;
}
