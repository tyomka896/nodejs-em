import Ajv from "ajv";
import ajvFormats from "ajv-formats";

import { BaseController } from "#classes/BaseController.js";
import { CreateUsersSchema } from "#components/users/dto/CreateUsers.js";
import { CreateUsersService } from "#components/users/services/CreateUsers.js";

/**
 * Example:
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "Ivan","surname": "Ivanov","password": "ABC@abc123","email": "ivan.ivanov@example.com"}'
 */
class CreateUsersController extends BaseController {
    constructor() {
        super();

        this.ajv = new Ajv({ allErrors: true });

        ajvFormats(this.ajv, ["email"]);

        this.ajv.addFormat("password", {
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

    get querySchema() {
        return CreateUsersSchema;
    }

    compileSchema(schema) {
        return this.ajv.compile(schema);
    }

    async controller(req) {
        return await CreateUsersService({
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            email: req.body.email,
        });
    }
}

export default new CreateUsersController();
