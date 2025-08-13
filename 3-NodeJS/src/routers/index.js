import testRouter from "#components/basics/router.js";
import usersRouter from "#components/users/router.js";
import authRouter from "#components/auth/router.js";

export function useRouters(app) {
    app.use("/test", testRouter);
    app.use(authRouter);
    app.use(usersRouter);
}
