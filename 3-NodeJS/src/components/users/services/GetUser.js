import { User } from "#models/User.js";

export async function GetUserService({ page = 1, limit = 50, role }) {
    page = +page;
    limit = +limit;

    const offset = (page - 1) * limit;

    const where = {};

    if (role) {
        where.role = role;
    }

    const result = await User.findAndCountAll({
        where,
        order: [["id", "ASC"]],
        limit,
        offset,
    });

    return {
        items: result.rows,
        total: result.count,
        page,
        limit,
        totalPages: Math.ceil(result.count / limit),
    };
}
