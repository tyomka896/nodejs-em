import Express, { json } from "express";

import { APP_PORT } from "#config";
import testRouter from "./router.js";
import usersRouter from "./components/users/router.js";
import authRouter from "./components/auth/router.js";

const app = Express();

app.use(json());

app.use("/test", testRouter);
app.use(authRouter);
app.use(usersRouter);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
