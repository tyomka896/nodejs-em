import { connection } from "#libs/database.js";

export async function GetAllCoursesService() {
    return await connection.manyOrNone("SELECT * FROM courses");
}
