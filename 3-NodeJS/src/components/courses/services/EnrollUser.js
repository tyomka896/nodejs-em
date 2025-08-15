import { User } from "#models/User.js";
import { Course } from "#models/Course.js";
import { UserCourse } from "#models/UserCourse.js";
import { ValidationError } from "#errors/index.js";

export async function EnrollUserService({ userId, courseId }) {
    const user = await User.findOne({ where: { id: userId } });

    if (!user || user.role !== "student") {
        throw new ValidationError("User must be a student");
    }

    const course = await Course.findOne({ where: { id: courseId } });

    if (!course) {
        throw new ValidationError(`Course with id #${courseId} not found`);
    }

    const enrollExists = await UserCourse.findOne({
        where: { user_id: userId, course_id: courseId },
    });

    if (enrollExists) {
        throw new ValidationError("User is already enrolled in this course");
    }

    return await UserCourse.create({ user_id: userId, course_id: courseId });
}
