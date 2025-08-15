import { connection } from "#libs/database.js";

export async function GetUsersService({ page = 1, limit = 50, role }) {
    page = +page;
    limit = +limit;

    const offset = (page - 1) * limit;

    let whereClause = "";
    let params = [limit, offset];

    if (role) {
        whereClause = "WHERE role = $3";

        params.push(role);
    }

    const users = await connection.any(
        `SELECT id, name, surname, email, role
        FROM users ${whereClause}
        ORDER BY id LIMIT $1 OFFSET $2`,
        params,
    );

    let totalQuery = "SELECT COUNT(*) FROM users";
    let totalParams = [];

    if (role) {
        totalQuery += " WHERE role = $1";
        totalParams = [role];
    }

    const total = await connection.one(totalQuery, totalParams);

    return {
        items: users,
        total: parseInt(total.count, 10),
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages: Math.ceil(total.count / limit),
    };
}
