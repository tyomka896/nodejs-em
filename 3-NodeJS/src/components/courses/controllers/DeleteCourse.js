import { Controller } from "#components/Controller.js";
import { DeleteCourseService } from "#components/courses/services/DeleteCourse.js";

class DeleteCourseController extends Controller {
    async controller(req) {
        return await DeleteCourseService({
            courseId: req.params.id,
        });
    }
}

export default new DeleteCourseController();
