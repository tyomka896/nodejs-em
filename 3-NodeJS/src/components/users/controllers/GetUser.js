import { Controller } from "#components/Controller.js";
import { GetUserSchema } from "#components/users/dto/GetUser.js";
import { GetUserService } from "#components/users/services/GetUser.js";

/**
 * Example:
 * curl "http://localhost:3000/users?page=1&limit=5"
 */
class GetUserController extends Controller {
    get querySchema() {
        return GetUserSchema;
    }

    async controller(req) {
        return await GetUserService(req.query);
    }
}

export default new GetUserController();
