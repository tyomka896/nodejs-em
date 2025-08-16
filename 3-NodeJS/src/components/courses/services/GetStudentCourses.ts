import { User } from "#models/User.ts";
import { CoursesService, CourseTypes, UserTypes } from "#types/index.ts";

export async function GetStudentCoursesService(
    args: CoursesService.GetStudentCoursesArgs,
): Promise<CourseTypes.Model[]> {
    const { studentId } = args;

    const user: UserTypes.Model | null = await User.findByPk(studentId, {
        include: "courses",
        order: [["id", "asc"]],
    });

    return user?.courses || [];
}
