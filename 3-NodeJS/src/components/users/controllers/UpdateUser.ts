import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import {
    UpdateUserData,
    UpdateUserSchema,
} from "#components/users/dto/UpdateUser.ts";
import { UpdateUserService } from "#components/users/services/UpdateUser.ts";

/**
 * Example:
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Петр","surname":"Петров"}'
 */
class UpdateUserController extends Controller<boolean> {
    get bodySchema(): JSONSchemaType<UpdateUserData> {
        return UpdateUserSchema;
    }

    async controller(req: Request): Promise<boolean> {
        const id: number = +req.params.id;
        const { name, surname } = req.body;

        return await UpdateUserService({ id, name, surname });
    }
}

export default new UpdateUserController();
