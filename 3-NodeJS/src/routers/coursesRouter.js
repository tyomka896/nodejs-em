import { Router } from "express";

import { AuthMiddleware } from "#middleware/AuthMiddleware.js";
import {
    IsMentorMiddleware,
    OnlyAdminMiddleware,
    OnlyMentorMiddleware,
    OnlyStudentMiddleware,
} from "#middleware/RoleMiddleware.js";

import CreateCourseController from "#components/courses/controllers/CreateCourse.js";
import EnrollUserController from "#components/courses/controllers/EnrollUser.js";
import GetCourseController from "#components/courses/controllers/GetCourse.js";
import UpdateCourseController from "#components/courses/controllers/UpdateCourse.js";
import DeleteCourseController from "#components/courses/controllers/DeleteCourse.js";
import GetMentorCoursesController from "#components/courses/controllers/GetMentorCourses.js";
import GetStudentCoursesController from "#components/courses/controllers/GetStudentCourses.js";
import GetAllCoursesController from "#components/courses/controllers/GetAllCourses.js";

const router = Router();

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
