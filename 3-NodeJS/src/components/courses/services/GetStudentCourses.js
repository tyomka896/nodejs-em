import { User } from "#models/User.js";
import { Course } from "#models/Course.js";

export async function GetStudentCoursesService({ studentId }) {
    const user = await User.findByPk(studentId, { include: Course });

    return user ? user.Courses : [];
}
