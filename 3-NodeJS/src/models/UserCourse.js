import { DataTypes, Model } from "sequelize";

import { sequelize } from "#libs/database.js";

export class UserCourse extends Model {}

UserCourse.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "users",
            key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "courses",
            key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: "users_courses",
    createdAt: "created_at",
    updatedAt: false,
});
