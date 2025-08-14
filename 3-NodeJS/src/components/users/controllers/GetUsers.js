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
        };
    }

    async controller(req) {
        let { page = 1, limit = 50 } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        const result = await GetUsersService({ page, limit });

        result.users = result.users.map(this.Getters);

        return result;
    }
}

export default new GetUsersController();
