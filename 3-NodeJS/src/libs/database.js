import { Sequelize } from "sequelize";

import {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_PORT,
    DATABASE_USER,
} from "#config/database.js";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: DATABASE_HOST,
    port: +DATABASE_PORT,
    database: DATABASE_NAME,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    logging: false,
    timezone: "+00:00",
});

// connection.connect()
//     .then((connect) => connect.done())
//     .catch((error) => {
//         console.error("DataBase connection Error", error);
//     });
