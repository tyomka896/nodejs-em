import Express, { json } from "express";

import { SERVER_PORT } from "./config.js";
import testRouter from "./router.js";
import usersRouter from "./components/users/router.js";
import authRouter from "./components/auth/router.js";

const app = Express();

app.use(json());

app.use("/test", testRouter);
app.use(authRouter);
app.use(usersRouter);

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
