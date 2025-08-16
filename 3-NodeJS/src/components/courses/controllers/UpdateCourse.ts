import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { CourseTypes } from "#types/index.ts";
import { Controller } from "#components/Controller.ts";
import { UpdateCourseService } from "#components/courses/services/UpdateCourse.ts";
import {
    UpdateCourseData,
    UpdateCourseSchema,
} from "#components/courses/dto/UpdateCourse.ts";

class UpdateCourseController extends Controller<CourseTypes.Model | boolean> {
    get bodySchema(): JSONSchemaType<UpdateCourseData> {
        return UpdateCourseSchema;
    }

    async controller(req: Request): Promise<CourseTypes.Model | boolean> {
        return await UpdateCourseService({
            courseId: req.params.id,
            ...req.body,
        });
    }
}

export default new UpdateCourseController();
