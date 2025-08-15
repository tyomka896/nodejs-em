import { connection } from "#libs/database.js";

export async function DeleteCourseService({ courseId }) {
    const { rowCount } = await connection.result(
        "DELETE FROM courses WHERE id = $1",
        [courseId],
    );

    return rowCount >= 1;
}
