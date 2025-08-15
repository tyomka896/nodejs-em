import authRouter from "./authRouters.js";
import basicRouters from "./basicRouters.js";
import coursesRouter from "./coursesRouter.js";
import usersRouter from "./usersRouters.js";

export function useRouters(app) {
    app.use(authRouter);
    app.use("/test", basicRouters);
    app.use(coursesRouter);
    app.use(usersRouter);
}
