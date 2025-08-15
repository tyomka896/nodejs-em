import { Controller } from "#components/Controller.js";
import { AuthSchema } from "#components/auth/dto/Auth.js";
import { GetUserService } from "#components/auth/services/GetUser.js";
import { GetTokenService } from "#components/auth/services/GetToken.js";
import { UnauthorizedError } from "#errors/UnauthorizedError.js";

class AuthController extends Controller {
    get bodySchema() {
        return AuthSchema;
    }

    async controller(req) {
        const { email, password } = req.body;

        const user = await GetUserService({ email, password });

        if (!user) {
            throw new UnauthorizedError("Password or email is incorrect");
        }

        const tokens = GetTokenService(user);

        return tokens;
    }
}

export default new AuthController();
