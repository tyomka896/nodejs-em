import pgPromise from "pg-promise";

import {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_PORT,
    DATABASE_USER,
} from "../config.js";

const pg = pgPromise();

export const connection = pg({
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
});

connection.connect()
    .then((connect) => {
        console.log("Connect to DB success");

        connect.done();
    })
    .catch((error) => {
        console.error("DataBase connection Error", error);
    });
