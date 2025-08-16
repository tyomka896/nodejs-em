import { Course } from "#models/Course.ts";
import { CoursesService, CourseTypes } from "#types/index.ts";

export async function CreateCourseService(
    args: CoursesService.CreateCourseArgs,
): Promise<CourseTypes.Model> {
    const { title, about, creatorId } = args;

    return await Course.create({
        title,
        about,
        creator_id: creatorId,
    });
}
