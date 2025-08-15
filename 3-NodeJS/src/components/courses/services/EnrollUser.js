import { connection } from "#libs/database.js";
import { ValidationError } from "#errors/index.js";

export async function EnrollUserService({ userId, courseId }) {
    const user = await connection.oneOrNone(
        "SELECT role FROM users WHERE id = $1",
        [userId],
    );

    if (!user || user.role !== "student") {
        throw new ValidationError("User must be a student");
    }

    await connection.none(
        "INSERT INTO users_courses (user_id, course_id) VALUES ($1, $2)",
        [userId, courseId],
    );

    return true;
}
