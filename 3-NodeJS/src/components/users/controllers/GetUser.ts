import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import { GetUserData, GetUserSchema } from "#components/users/dto/GetUser.ts";
import { GetUserService } from "#components/users/services/GetUser.ts";
import { PagedResponse } from "#types/express.ts";
import { UserTypes } from "#types/index.ts";

/**
 * Example:
 * curl "http://localhost:3000/users?page=1&limit=5"
 */
class GetUserController extends Controller<PagedResponse<UserTypes.Model>> {
    get querySchema(): JSONSchemaType<GetUserData> {
        return GetUserSchema;
    }

    async controller(req: Request): Promise<PagedResponse<UserTypes.Model>> {
        const { limit, page, role } = req.query as GetUserData;

        return await GetUserService({ limit, page, role });
    }
}

export default new GetUserController();
