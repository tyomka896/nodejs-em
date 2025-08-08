import Express from "express";

const APP_PORT = 3000;

const app = Express();

app.get("/test", (req, res) => {
    res.send("OK");
});

app.listen(APP_PORT, () => {
    console.log(`Server started on: http://localhost:${APP_PORT}`);
});
