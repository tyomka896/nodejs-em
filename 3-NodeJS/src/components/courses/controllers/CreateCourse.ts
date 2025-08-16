import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { CourseTypes } from "#types/index.ts";
import { Controller } from "#components/Controller.ts";
import { CreateCourseService } from "#components/courses/services/CreateCourse.ts";
import {
    CreateCourseData,
    CreateCourseSchema,
} from "#components/courses/dto/CreateCourse.ts";

class CreateCourseController extends Controller<CourseTypes.Model> {
    get bodySchema(): JSONSchemaType<CreateCourseData> {
        return CreateCourseSchema;
    }

    async controller(req: Request): Promise<CourseTypes.Model> {
        return await CreateCourseService({
            ...req.body,
            creatorId: req.state!.user!.id,
        });
    }
}

export default new CreateCourseController();
