import Express, { Application, json } from "express";

import "#models/index.ts";
import { APP_PORT } from "#config/app.ts";
import { useRouters } from "./routers/index.ts";
import { LoggerMiddleware } from "#middleware/LoggerMiddleware.ts";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware.ts";

const app: Application = Express();

app.use(json());
app.use(LoggerMiddleware);

useRouters(app);

app.use(ErrorMiddleware);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
