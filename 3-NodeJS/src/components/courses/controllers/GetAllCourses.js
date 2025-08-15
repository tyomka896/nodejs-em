import { Controller } from "#components/Controller.js";
import { GetAllCoursesService } from "#components/courses/services/GetAllCourses.js";

class GetAllCoursesController extends Controller {
    async controller() {
        return await GetAllCoursesService();
    }
}

export default new GetAllCoursesController();
