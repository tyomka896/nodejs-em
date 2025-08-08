import Express, { json } from "express";

import { APP_PORT } from "./config.js";
import testRouter from "./router.js";

const app = Express();

app.use(json());
app.use("/test", testRouter);

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
