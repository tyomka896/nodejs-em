import { CreateUsers } from "../services/CreateUsers.js";

export async function CreateUsersController(req, res) {
    const usersData = {
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
        email: req.body.email,
    };

    await CreateUsers(usersData);

    res.send("OK");
}
