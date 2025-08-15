import { Controller } from "#components/Controller.js";
import { GetMentorCoursesService } from "#components/courses/services/GetMentorCourses.js";

class GetMentorCoursesController extends Controller {
    async controller(req) {
        return await GetMentorCoursesService({
            mentorId: req.state.user.id,
        });
    }
}

export default new GetMentorCoursesController();
