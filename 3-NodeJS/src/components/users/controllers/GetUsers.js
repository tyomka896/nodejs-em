import { GetUsersValidate } from "../dto/GetUsers.js";
import { GetUsers } from "../services/GetUsers.js";

/**
 * Example:
 * curl "http://localhost:3000/users?page=2&limit=5"
 */
export async function GetUsersController(req, res) {
    if (!GetUsersValidate(req.query)) {
        return res.status(400).json({
            error: "Invalid query parameters",
            messages: GetUsersValidate.errors
                .map(({ instancePath, message }) => ({
                    [instancePath]: message,
                })),
        });
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;

    const result = await GetUsers({ page, limit });

    res.json(result);
}
