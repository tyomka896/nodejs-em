import { Course } from "#models/Course.js";

export async function UpdateCourseService({ courseId, title, about }) {
    const updateData = {};

    if (title) {
        updateData.title = title;
    }

    if (about) {
        updateData.about = about;
    }

    if (Object.keys(updateData).length === 0) {
        return false;
    }

    const [rowCount, models] = await Course.update(updateData, {
        where: { id: courseId },
        returning: true,
    });

    return rowCount >= 1 ? models[0] : false;
}
