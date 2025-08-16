import { Router } from "express";

import { AuthMiddleware } from "#middleware/AuthMiddleware.ts";
import {
    IsMentorMiddleware,
    OnlyAdminMiddleware,
    OnlyMentorMiddleware,
    OnlyStudentMiddleware,
} from "#middleware/RoleMiddleware.ts";

import CreateCourseController from "#components/courses/controllers/CreateCourse.ts";
import EnrollUserController from "#components/courses/controllers/EnrollUser.ts";
import GetCourseController from "#components/courses/controllers/GetCourse.ts";
import UpdateCourseController from "#components/courses/controllers/UpdateCourse.ts";
import DeleteCourseController from "#components/courses/controllers/DeleteCourse.ts";
import GetMentorCoursesController from "#components/courses/controllers/GetMentorCourses.ts";
import GetStudentCoursesController from "#components/courses/controllers/GetStudentCourses.ts";
import GetAllCoursesController from "#components/courses/controllers/GetAllCourses.ts";

const router: Router = Router();

router.post(
    "/courses",
    AuthMiddleware,
    IsMentorMiddleware,
    CreateCourseController.run,
);

router.post(
    "/courses/:courseId/enroll",
    AuthMiddleware,
    IsMentorMiddleware,
    EnrollUserController.run,
);

router.get(
    "/courses/mentor",
    AuthMiddleware,
    OnlyMentorMiddleware,
    GetMentorCoursesController.run,
);

router.get(
    "/courses/student",
    AuthMiddleware,
    OnlyStudentMiddleware,
    GetStudentCoursesController.run,
);

router.get(
    "/courses/:id",
    AuthMiddleware,
    GetCourseController.run,
);

router.put(
    "/courses/:id",
    AuthMiddleware,
    IsMentorMiddleware,
    UpdateCourseController.run,
);

router.delete(
    "/courses/:id",
    AuthMiddleware,
    OnlyAdminMiddleware,
    DeleteCourseController.run,
);

router.get(
    "/courses",
    AuthMiddleware,
    OnlyAdminMiddleware,
    GetAllCoursesController.run,
);

export default router;
