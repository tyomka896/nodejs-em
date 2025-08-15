import { Course } from "#models/Course.js";

export async function CreateCourseService({ title, about, creatorId }) {
    const course = await Course.create({
        title,
        about: about || null,
        creator_id: creatorId,
    });

    return course;
}
