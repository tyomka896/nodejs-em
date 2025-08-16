import { Request } from "express";

import { Controller } from "#components/Controller.ts";
import { GetStudentCoursesService } from "#components/courses/services/GetStudentCourses.ts";
import { CourseTypes } from "#types/index.ts";

class GetStudentCoursesController extends Controller<CourseTypes.Model[]> {
    async controller(req: Request): Promise<CourseTypes.Model[]> {
        return await GetStudentCoursesService({
            studentId: req.state!.user!.id,
        });
    }
}

export default new GetStudentCoursesController();
