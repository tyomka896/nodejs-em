import { User } from "#models/User.ts";
import { PagedResponse, UsersService, UserTypes } from "#types/index.ts";

export async function GetUserService(
    args: UsersService.GetUserArgs,
): Promise<PagedResponse<UserTypes.Model>> {
    let { page = 1, limit = 50, role } = args;

    const offset: number = (page - 1) * limit;

    const where = {
        ...(role !== undefined && { role }),
    };

    const { rows, count } = await User.findAndCountAll({
        where,
        order: [["id", "ASC"]],
        limit,
        offset,
    });

    return {
        items: rows,
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
    };
}
