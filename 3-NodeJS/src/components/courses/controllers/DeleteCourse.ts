import { Request } from "express";

import { ValidationError } from "#errors/index.ts";
import { Controller } from "#components/Controller.ts";
import { DeleteCourseService } from "#components/courses/services/DeleteCourse.ts";

class DeleteCourseController extends Controller<boolean> {
    async controller(req: Request): Promise<boolean> {
        const courseId: number = Number(req.params.id);

        if (Number.isNaN(courseId) || courseId <= 0) {
            throw new ValidationError("Некорректный идентификатор курса");
        }

        return await DeleteCourseService({ courseId });
    }
}

export default new DeleteCourseController();
