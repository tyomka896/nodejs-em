import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import { AuthData, AuthSchema } from "#components/auth/dto/Auth.ts";
import { GetUserService } from "#components/auth/services/GetUser.ts";
import { GetTokenService } from "#components/auth/services/GetToken.ts";

import { AuthService, UserTypes } from "#types/index.ts";
import { UnauthorizedError } from "#errors/UnauthorizedError.ts";

class AuthController extends Controller<AuthService.TokenResult> {
    get bodySchema(): JSONSchemaType<AuthData> {
        return AuthSchema;
    }

    async controller(req: Request): Promise<AuthService.TokenResult> {
        const { email, password } = req.body;

        const user: UserTypes.Model = await GetUserService({ email, password });

        if (!user) {
            throw new UnauthorizedError("Password or email is incorrect");
        }

        return await GetTokenService(user);
    }
}

export default new AuthController();
