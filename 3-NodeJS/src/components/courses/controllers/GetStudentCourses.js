import { Controller } from "#components/Controller.js";
import { GetStudentCoursesService } from "#components/courses/services/GetStudentCourses.js";

class GetStudentCoursesController extends Controller {
    async controller(req) {
        return await GetStudentCoursesService({
            studentId: req.state.user.id,
        });
    }
}

export default new GetStudentCoursesController();
