import { User } from "./User.js";
import { Course } from "./Course.js";
import { UserCourse } from "./UserCourse.js";

User.belongsToMany(Course, {
    through: UserCourse,
    foreignKey: "user_id",
    otherKey: "course_id",
});

Course.belongsToMany(User, {
    through: UserCourse,
    foreignKey: "course_id",
    otherKey: "user_id",
});
