import { Course } from "#models/Course.js";

export async function GetAllCoursesService() {
    return await Course.findAll();
}
