import { Course } from "#models/Course.ts";
import { CoursesService } from "#types/index.ts";

export async function DeleteCourseService(
    args: CoursesService.DeleteCourseArgs,
): Promise<boolean> {
    const id: number = args.courseId;

    const rowCount: number = await Course.destroy({ where: { id } });

    return rowCount >= 1;
}
