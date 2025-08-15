import { Course } from "#models/Course.js";

export async function DeleteCourseService({ courseId }) {
    const rowCount = await Course.destroy({ where: { id: courseId } });

    return rowCount >= 1;
}
