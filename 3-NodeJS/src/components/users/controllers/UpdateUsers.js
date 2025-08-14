import { Controller } from "#components/Controller.js";
import { UpdateUsersSchema } from "#components/users/dto/UpdateUsers.js";
import { UpdateUserService } from "#components/users/services/UpdateUsers.js";

/**
 * Example:
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Петр","surname":"Петров"}'
 */
class UpdateUserController extends Controller {
    get bodySchema() {
        return UpdateUsersSchema;
    }

    async controller(req) {
        const id = req.params.id;

        return await UpdateUserService({ id, ...req.body });
    }
}

export default new UpdateUserController();
