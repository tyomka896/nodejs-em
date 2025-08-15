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

    async controller(req) {
        return await GetUsersService(req.query);
    }
}

export default new GetUsersController();
