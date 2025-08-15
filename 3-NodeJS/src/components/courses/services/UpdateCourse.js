import { connection } from "#libs/database.js";

export async function UpdateCourseService({ courseId, title, about }) {
    const updates = [];
    const params = [courseId];

    if (title) {
        params.push(title);

        updates.push(`title = $${params.length}`);
    }

    if (about) {
        params.push(about);

        updates.push(`about = $${params.length}`);
    }

    if (updates.length === 0) {
        return false;
    }

    const { rowCount } = await connection.result(
        `UPDATE courses SET ${updates.join(", ")} WHERE id = $1`,
        params,
    );

    return rowCount >= 1;
}
