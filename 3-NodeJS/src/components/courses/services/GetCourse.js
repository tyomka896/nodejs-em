import { Course } from "#models/Course.js";
import { UserCourse } from "#models/UserCourse.js";
import { NotFoundError, ValidationError } from "#errors/index.js";

export async function GetCourseService({ courseId, userId, role }) {
    const course = await Course.findOne({ where: { id: courseId } });

    if (!course) {
        throw new NotFoundError("Course not found");
    }

    if (role === "admin" || role === "mentor") {
        return course;
    }

    if (role !== "student") {
        throw new ValidationError("Access denied");
    }

    const enrolled = await UserCourse.findOne({
        where: { user_id: userId, course_id: courseId },
    });

    if (enrolled) {
        return course;
    }

    throw new ValidationError("Access denied");
}
