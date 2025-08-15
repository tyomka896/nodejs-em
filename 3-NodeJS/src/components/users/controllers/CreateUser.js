import { Controller } from "#components/Controller.js";
import { CreateUserSchema } from "#components/users/dto/CreateUser.js";
import { CreateUserService } from "#components/users/services/CreateUser.js";

/**
 * Example:
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "Ivan","surname": "Ivanov","password": "ABC@abc123","email": "ivan.ivanov@example.com"}'
 */
class CreateUserController extends Controller {
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

    get bodySchema() {
        return CreateUserSchema;
    }

    async controller(req) {
        const model = await CreateUserService({
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            email: req.body.email,
        });

        const modelJson = model.toJSON();

        delete modelJson.password;
        delete modelJson.refresh_token;

        return modelJson;
    }
}

export default new CreateUserController();
