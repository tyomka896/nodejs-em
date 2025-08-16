import { DataTypes, Model } from "sequelize";

import { sequelize } from "#libs/database.ts";
import { UserTypes } from "#types/index.ts";

export class User extends Model<UserTypes.Attributes, UserTypes.Create>
    implements UserTypes.Attributes {
    declare id: number;
    declare role: UserTypes.Role;
    declare name: string;
    declare surname: string;
    declare password: string;
    declare email: string;
    declare refresh_token: string | null;
    declare created_at: Date;
    declare updated_at: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role: {
        type: DataTypes.ENUM("student", "mentor", "admin"),
        allowNull: false,
        defaultValue: "student",
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token: {
        type: DataTypes.STRING,
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
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    defaultScope: {
        attributes: { exclude: ["password", "refresh_token"] },
    },
});
