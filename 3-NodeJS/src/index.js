import Express, { json } from "express";

import { APP_PORT } from "#config/app.js";
import { useRouters } from "./routers/index.js";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware.js";

const app = Express();

app.use(json());

useRouters(app);

app.use(ErrorMiddleware);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
