import { GetUsers } from "../services/GetUsers.js";

/**
 * Example:
 * curl "http://localhost:3000/users?page=2&limit=5"
 */
export async function GetUsersController(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const result = await GetUsers({ page, limit });

    res.json(result);
}
