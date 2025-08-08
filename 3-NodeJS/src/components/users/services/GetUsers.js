import { connection } from "../../../libs/database.js";

export async function GetUsers({ page = 1, limit = 10 }) {
    const offset = (page - 1) * limit;

    const users = await connection.any(
        "SELECT id, name, surname, email FROM users ORDER BY id LIMIT $1 OFFSET $2",
        [limit, offset],
    );

    const total = await connection.one(
        "SELECT COUNT(*) FROM users",
    );

    return {
        users,
        total: parseInt(total.count, 10),
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages: Math.ceil(total.count / limit),
    };
}
