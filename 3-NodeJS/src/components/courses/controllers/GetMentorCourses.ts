import { Request } from "express";

import { CourseTypes } from "#types/index.ts";
import { Controller } from "#components/Controller.ts";
import { GetMentorCoursesService } from "#components/courses/services/GetMentorCourses.ts";

class GetMentorCoursesController extends Controller<CourseTypes.Model[]> {
    async controller(req: Request): Promise<CourseTypes.Model[]> {
        return await GetMentorCoursesService({
            mentorId: req.state!.user!.id,
        });
    }
}

export default new GetMentorCoursesController();
