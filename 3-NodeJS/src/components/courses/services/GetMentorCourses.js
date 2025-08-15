import { Course } from "#models/Course.js";

export async function GetMentorCoursesService({ mentorId }) {
    return await Course.findAll({ where: { creator_id: mentorId } });
}
