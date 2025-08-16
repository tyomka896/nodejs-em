import { Course } from "#models/Course.ts";
import { CoursesService, CourseTypes } from "#types/index.ts";

export async function GetMentorCoursesService(
    args: CoursesService.GetMentorCoursesArgs,
): Promise<CourseTypes.Model[]> {
    const { mentorId } = args;

    return await Course.findAll({
        where: { creator_id: mentorId },
        order: [["id", "asc"]],
    });
}
