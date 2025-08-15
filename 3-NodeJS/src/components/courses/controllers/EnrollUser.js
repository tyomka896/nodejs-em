import { Controller } from "#components/Controller.js";
import { EnrollUserSchema } from "#components/courses/dto/EnrollUser.js";
import { EnrollUserService } from "#components/courses/services/EnrollUser.js";

class EnrollUserController extends Controller {
    get bodySchema() {
        return EnrollUserSchema;
    }

    async controller(req) {
        return await EnrollUserService({
            userId: req.body.userId,
            courseId: req.params.courseId,
        });
    }
}

export default new EnrollUserController();
