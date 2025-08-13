import Express, { json } from "express";

import { APP_PORT } from "#config";
import { useRouters } from "./routers/index.js";

const app = Express();

app.use(json());
useRouters(app);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
