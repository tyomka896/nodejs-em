import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import {
    CreateUserData,
    CreateUserSchema,
} from "#components/users/dto/CreateUser.ts";
import { CreateUserService } from "#components/users/services/CreateUser.ts";
import { UserTypes } from "#types/index.ts";

/**
 * Example:
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "Ivan","surname": "Ivanov","password": "ABC@abc123","email": "ivan.ivanov@example.com"}'
 */
class CreateUserController extends Controller<UserTypes.Model> {
    constructor() {
        super();

        this.addFormat("password", {
            type: "string",
            validate: (password) => {
                return typeof password === "string" &&
                    password.length >= 8 &&
                    /[A-Z]/.test(password) &&
                    /[a-z]/.test(password) &&
                    /\d/.test(password) &&
                    /[@$!%*?&]/.test(password);
            },
        });
    }

    get bodySchema(): JSONSchemaType<CreateUserData> {
        return CreateUserSchema;
    }

    async controller(req: Request): Promise<UserTypes.Model> {
        const model = await CreateUserService({
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            email: req.body.email,
        });

        const { password, refresh_token, ...publicFields } = model;

        return publicFields as UserTypes.Model;
    }
}

export default new CreateUserController();
