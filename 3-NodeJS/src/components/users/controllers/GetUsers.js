import { Controller } from "#components/Controller.js";
import { GetUsersSchema } from "#components/users/dto/GetUsers.js";
import { GetUsersService } from "#components/users/services/GetUsers.js";

/**
 * Example:
 * curl "http://localhost:3000/users?page=1&limit=5"
 */
class GetUsersController extends Controller {
    get querySchema() {
        return GetUsersSchema;
    }

    Getters(user) {
        return {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }

    async controller(req) {
        const result = await GetUsersService(req.query);

        result.items = result.items.map(this.Getters);

        return result;
    }
}

export default new GetUsersController();
