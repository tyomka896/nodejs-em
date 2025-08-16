import { DataTypes, Model } from "sequelize";

import { sequelize } from "#libs/database.ts";
import { UserCourseTypes } from "#types/index.ts";

export class UserCourse
    extends Model<UserCourseTypes.Attributes, UserCourseTypes.Create>
    implements UserCourseTypes.Attributes {
    declare user_id: number;
    declare course_id: number;
    declare created_at: Date;
}

UserCourse.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: "users_courses",
    createdAt: "created_at",
    updatedAt: false,
});
