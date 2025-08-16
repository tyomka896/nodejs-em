import { User } from "./User.ts";
import { Course } from "./Course.ts";
import { UserCourse } from "./UserCourse.ts";

User.belongsToMany(Course, {
    through: UserCourse,
    as: "courses",
    foreignKey: "user_id",
    otherKey: "course_id",
});

Course.belongsToMany(User, {
    through: UserCourse,
    as: "users",
    foreignKey: "course_id",
    otherKey: "user_id",
});
