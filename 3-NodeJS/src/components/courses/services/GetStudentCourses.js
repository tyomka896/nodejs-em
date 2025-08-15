import { connection } from "#libs/database.js";

export async function GetStudentCoursesService({ studentId }) {
    return await connection.manyOrNone(
        `SELECT courses.*
        FROM courses
        JOIN users_courses ON courses.id = users_courses.course_id
        WHERE users_courses.user_id = $1`,
        [studentId],
    );
}
