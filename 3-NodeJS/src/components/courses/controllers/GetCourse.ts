import { Request } from "express";

import { Controller } from "#components/Controller.ts";
import { GetCourseService } from "#components/courses/services/GetCourse.ts";
import { CourseTypes } from "#types/index.ts";

class GetCourseController extends Controller<CourseTypes.Model> {
    async controller(req: Request): Promise<CourseTypes.Model> {
        // TODO: validate correctly with paramSchema
        return await GetCourseService({
            courseId: +req.params.id,
            userId: req.state!.user!.id,
            role: req.state!.user!.role,
        });
    }
}

export default new GetCourseController();
