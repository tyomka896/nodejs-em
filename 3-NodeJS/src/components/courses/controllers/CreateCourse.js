import { Controller } from "#components/Controller.js";
import { CreateCourseSchema } from "#components/courses/dto/CreateCourse.js";
import { CreateCourseService } from "#components/courses/services/CreateCourse.js";

class CreateCourseController extends Controller {
    get bodySchema() {
        return CreateCourseSchema;
    }

    async controller(req) {
        return await CreateCourseService({
            ...req.body,
            creatorId: req.state.user.id,
        });
    }
}

export default new CreateCourseController();
