import { CreateUsersValidate } from "#components/users/dto/CreateUsers.js";
import { CreateUsersService } from "#components/users/services/CreateUsers.js";

/**
 * Example:
 * curl -X POST http://localhost:3000/users \
 *      -H "Content-Type: application/json" \
 *      -d '{"name": "Ivan","surname": "Ivanov","password": "ABC@abc123","email": "ivan.ivanov@example.com"}'
 */
export async function CreateUsersController(req, res) {
    if (!CreateUsersValidate(req.body)) {
        return res.status(400).json({
            error: "Invalid query parameters",
            messages: CreateUsersValidate.errors
                .map(({ instancePath, message }) => ({
                    [instancePath]: message,
                })),
        });
    }

    const usersData = {
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
        email: req.body.email,
    };

    await CreateUsersService(usersData);

    res.send("OK");
}
