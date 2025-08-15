import { Controller } from "#components/Controller.js";
import { UpdateUserSchema } from "#components/users/dto/UpdateUser.js";
import { UpdateUserService } from "#components/users/services/UpdateUser.js";

/**
 * Example:
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Петр","surname":"Петров"}'
 */
class UpdateUserController extends Controller {
    get bodySchema() {
        return UpdateUserSchema;
    }

    async controller(req) {
        const id = req.params.id;

        return await UpdateUserService({ id, ...req.body });
    }
}

export default new UpdateUserController();
