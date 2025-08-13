import BaseController from "#classes/BaseController.js";
import { UpdateUserService } from "#components/users/services/UpdateUsers.js";

/**
 * Example:
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Петр","surname":"Петров"}'
 */
class UpdateUserController extends BaseController {
    async controller(req) {
        const id = req.params.id;

        const { name, surname } = req.body;

        try {
            await UpdateUserService({ id, name, surname });

            res.send("OK");
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default new UpdateUserController();
