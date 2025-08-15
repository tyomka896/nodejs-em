import { Controller } from "#components/Controller.js";
import { AuthSchema } from "#components/auth/dto/Auth.js";
import { GetUsersService } from "#components/auth/services/GetUsers.js";
import { GetTokensService } from "#components/auth/services/GetTokens.js";
import { UnauthorizedError } from "#errors/UnauthorizedError.js";

class AuthController extends Controller {
    get bodySchema() {
        return AuthSchema;
    }

    async controller(req) {
        const { email, password } = req.body;

        const user = await GetUsersService({ email, password });

        if (!user) {
            throw new UnauthorizedError("Password or email is incorrect");
        }

        const tokens = GetTokensService(user);

        return tokens;
    }
}

export default new AuthController();
