import { Course } from "#models/Course.ts";
import { CoursesService, CourseTypes } from "#types/index.ts";

export async function UpdateCourseService(
    args: CoursesService.UpdateCourseArgs,
): Promise<CourseTypes.Model | boolean> {
    const { courseId, title, about } = args;

    const updateData = {
        ...(title !== undefined && { title }),
        ...(about !== undefined && { about }),
    };

    if (Object.keys(updateData).length === 0) {
        return false;
    }

    const [rowCount, models] = await Course.update(updateData, {
        where: { id: courseId },
        returning: true,
    });

    return rowCount >= 1 ? models[0] : false;
}
