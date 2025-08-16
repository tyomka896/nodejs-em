import { Request } from "express";

import { Controller } from "#components/Controller.ts";
import { GetAllCoursesService } from "#components/courses/services/GetAllCourses.ts";
import { CourseTypes } from "#types/index.ts";

class GetAllCoursesController extends Controller<CourseTypes.Model[]> {
    async controller(_: Request): Promise<CourseTypes.Model[]> {
        return await GetAllCoursesService();
    }
}

export default new GetAllCoursesController();
