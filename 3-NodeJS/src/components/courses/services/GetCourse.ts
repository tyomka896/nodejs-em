import { Course } from "#models/Course.ts";
import { UserCourse } from "#models/UserCourse.ts";
import { NotFoundError, ValidationError } from "#errors/index.ts";
import { CoursesService, CourseTypes, UserCourseTypes } from "#types/index.ts";

export async function GetCourseService(
    args: CoursesService.GetCourseArgs,
): Promise<CourseTypes.Model> {
    const { courseId, userId, role } = args;

    const course: CourseTypes.Model | null = await Course
        .findOne({ where: { id: courseId } });

    if (!course) {
        throw new NotFoundError("Course not found");
    }

    if (["admin", "mentor"].includes(role)) {
        return course;
    }

    if (role !== "student") {
        throw new ValidationError("Access denied");
    }

    const enrolled: UserCourseTypes.Model | null = await UserCourse
        .findOne({ where: { user_id: userId, course_id: courseId } });

    if (enrolled) {
        return course;
    }

    throw new ValidationError("Access denied");
}
