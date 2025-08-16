import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import {
    AuthRefreshData,
    AuthRefreshSchema,
} from "#components/auth/dto/AuthRefresh.ts";
import { RefreshTokenService } from "#components/auth/services/RefreshToken.ts";
import { AuthService } from "#types/index.ts";

class AuthRefreshController extends Controller<AuthService.TokenResult> {
    get bodySchema(): JSONSchemaType<AuthRefreshData> {
        return AuthRefreshSchema;
    }

    async controller(req: Request): Promise<AuthService.TokenResult> {
        const { refreshToken } = req.body;

        return await RefreshTokenService(refreshToken);
    }
}

export default new AuthRefreshController();
