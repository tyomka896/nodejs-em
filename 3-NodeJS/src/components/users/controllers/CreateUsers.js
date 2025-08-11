import { CreateUsersValidate } from "../dto/CreateUsers.js";
import { CreateUsers } from "../services/CreateUsers.js";

/**
 * Example:
 * curl -X POST http://localhost:3000/users \
 *      -H "Content-Type: application/json" \
 *      -d '{"name": "Ivan","surname": "Ivanov","password": "ABC@abc123","email": "ivan.ivanov@example.com"}'
 */
export async function CreateUsersController(req, res) {
    if (!CreateUsersValidate(req.body)) {
        const errors = CreateUsersValidate.errors
            .map(({ message, dataPath }) => ({
                field: dataPath,
                message,
            }));

        return res.status(400).send(errors);
    }

    const usersData = {
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
        email: req.body.email,
    };

    await CreateUsers(usersData);

    res.send("OK");
}
