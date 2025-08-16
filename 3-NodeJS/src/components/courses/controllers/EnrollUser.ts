import { Request } from "express";
import { JSONSchemaType } from "ajv";

import { Controller } from "#components/Controller.ts";
import {
    EnrollUserData,
    EnrollUserSchema,
} from "#components/courses/dto/EnrollUser.ts";
import { EnrollUserService } from "#components/courses/services/EnrollUser.ts";
import { UserCourseTypes } from "#types/index.ts";

class EnrollUserController extends Controller<UserCourseTypes.Model> {
    get bodySchema(): JSONSchemaType<EnrollUserData> {
        return EnrollUserSchema;
    }

    async controller(req: Request): Promise<UserCourseTypes.Model> {
        const { userId } = req.body as EnrollUserData;

        // TODO: parse courseId correctly after modifying Controller
        return await EnrollUserService({
            userId,
            courseId: +req.params.courseId,
        });
    }
}

export default new EnrollUserController();
