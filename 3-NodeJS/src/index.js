import Express, { json } from "express";

import { SERVER_PORT } from "./config.js";
import testRouter from "./router.js";
import { connection } from "./libs/database.js";

const app = Express();

app.use(json());
app.use("/test", testRouter);

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
