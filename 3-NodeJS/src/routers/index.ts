import { Application } from "express";

import authRouter from "./authRouters.ts";
import basicRouters from "./basicRouters.ts";
import coursesRouter from "./coursesRouter.ts";
import usersRouter from "./usersRouters.ts";

export function useRouters(app: Application) {
    app.use(authRouter);
    app.use("/test", basicRouters);
    app.use(coursesRouter);
    app.use(usersRouter);
}
