import { UpdateUserService } from "#components/users/services/UpdateUsers.js";

/**
 * Example:
 * curl -X PUT http://localhost:3000/users/1 \
 *      -H "Content-Type: application/json" \
 *      -d '{"name":"Петр","surname":"Петров"}'
 */
export async function UpdateUserController(req, res) {
    const id = req.params.id;

    const { name, surname } = req.body;

    try {
        await UpdateUserService({ id, name, surname });

        res.send("OK");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
