import { connection } from "#libs/database.js";
import { ValidationError } from "#errors/index.js";

export async function UpdateUserService({ id, name, surname }) {
    const { rowCount } = await connection.result(
        "UPDATE users SET name = $1, surname = $2 WHERE id = $3",
        [name, surname, id],
    );

    return rowCount >= 1;
}
