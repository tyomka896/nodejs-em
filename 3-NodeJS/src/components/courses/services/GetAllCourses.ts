import { Course } from "#models/Course.ts";
import { CourseTypes } from "#types/index.ts";

export async function GetAllCoursesService(): Promise<CourseTypes.Model[]> {
    return await Course.findAll();
}
