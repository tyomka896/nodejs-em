import { connection } from "#libs/database.js";
import { NotFoundError, ValidationError } from "#errors/index.js";

export async function GetCourseService({ courseId, userId, role }) {
    const course = await connection.oneOrNone(
        "SELECT * FROM courses WHERE id = $1",
        [courseId],
    );

    if (!course) {
        throw new NotFoundError("Course not found");
    }

    if (role === "admin" || role === "mentor") {
        return course;
    }

    if (role !== "student") {
        throw new ValidationError("Access denied");
    }

    const enrolled = await connection.oneOrNone(
        "SELECT 1 FROM users_courses WHERE user_id = $1 AND course_id = $2",
        [userId, courseId],
    );

    if (enrolled) {
        return course;
    }

    throw new ValidationError("Access denied");
}
