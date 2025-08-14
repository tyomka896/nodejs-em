import authRouter from "./authRouters.js";
import basicRouters from "./basicRouters.js";
import usersRouter from "./userRouters.js";

export function useRouters(app) {
    app.use("/test", basicRouters);
    app.use(authRouter);
    app.use(usersRouter);
}
