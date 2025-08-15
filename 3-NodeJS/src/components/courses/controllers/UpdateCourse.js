import { Controller } from "#components/Controller.js";
import { UpdateCourseSchema } from "#components/courses/dto/UpdateCourse.js";
import { UpdateCourseService } from "#components/courses/services/UpdateCourse.js";

class UpdateCourseController extends Controller {
    get bodySchema() {
        return UpdateCourseSchema;
    }

    async controller(req) {
        return await UpdateCourseService({
            courseId: req.params.id,
            ...req.body,
        });
    }
}

export default new UpdateCourseController();
