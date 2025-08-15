import { Controller } from "#components/Controller.js";
import { GetCourseService } from "#components/courses/services/GetCourse.js";

class GetCourseController extends Controller {
    async controller(req) {
        return await GetCourseService({
            courseId: req.params.id,
            userId: req.state.user.id,
            role: req.state.user.role,
        });
    }
}

export default new GetCourseController();
