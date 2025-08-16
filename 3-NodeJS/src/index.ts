import Express, { Application, json } from "express";

import "#models/index.ts";
import { APP_PORT } from "#config/app.ts";
import { useRouters } from "./routers/index.ts";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware.ts";

const app: Application = Express();

app.use(json());

useRouters(app);

app.use(ErrorMiddleware);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
