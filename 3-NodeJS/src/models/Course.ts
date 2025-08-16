import { DataTypes, Model } from "sequelize";

import { sequelize } from "#libs/database.ts";
import { CourseTypes } from "#types/index.ts";

export class Course extends Model<CourseTypes.Attributes, CourseTypes.Create>
    implements CourseTypes.Attributes {
    declare id: number;
    declare creator_id: number;
    declare title: string;
    declare about: string | null;
    declare created_at: Date;
    declare updated_at: Date;
}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: "courses",
    createdAt: "created_at",
    updatedAt: "updated_at",
});
