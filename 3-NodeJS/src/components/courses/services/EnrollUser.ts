import { User } from "#models/User.ts";
import { Course } from "#models/Course.ts";
import { UserCourse } from "#models/UserCourse.ts";
import { ValidationError } from "#errors/index.ts";
import {
    CoursesService,
    CourseTypes,
    UserCourseTypes,
    UserTypes,
} from "#types/index.ts";

export async function EnrollUserService(
    args: CoursesService.EnrollUserArgs,
): Promise<UserCourseTypes.Model> {
    const { userId, courseId } = args;

    const user: UserTypes.Model | null = await User
        .findOne({ where: { id: userId } });

    if (!user || user.role !== "student") {
        throw new ValidationError("User must be a student");
    }

    const course: CourseTypes.Model | null = await Course
        .findOne({ where: { id: courseId } });

    if (!course) {
        throw new ValidationError(`Course with id #${courseId} not found`);
    }

    const enrollExists: UserCourseTypes.Model | null = await UserCourse
        .findOne({ where: { user_id: userId, course_id: courseId } });

    if (enrollExists) {
        throw new ValidationError("User is already enrolled in this course");
    }

    return await UserCourse.create({
        user_id: userId,
        course_id: courseId,
    });
}
