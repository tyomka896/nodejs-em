import { BaseController } from "#classes/BaseController.js";
import { AuthRefreshSchema } from "#components/auth/dto/AuthRefresh.js";
import { RefreshTokenService } from "#components/auth/services/RefreshToken.js";

class AuthRefreshController extends BaseController {
    get bodySchema() {
        return AuthRefreshSchema;
    }

    async controller(req) {
        const { refreshToken } = req.body;

        const tokens = await RefreshTokenService(refreshToken);

        if (!tokens) {
            return "Invalid or expired refresh token";
        }

        return tokens;
    }
}

export default new AuthRefreshController();
