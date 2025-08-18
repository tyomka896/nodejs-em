import { DataTypes, Model } from "sequelize";

import { AuditDataTypes } from "@src/types/index.d.ts";
import { sequelize } from "@src/database.ts";

export class AuditData
    extends Model<AuditDataTypes.Attributes, AuditDataTypes.Create>
    implements AuditDataTypes.Attributes {
    declare id: number;
    declare url: string;
    declare method: string;
    declare user_id: number | null;
    declare user_role: AuditDataTypes.Role | null;
    declare description: string;
    declare created_at: Date;
}

AuditData.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    user_role: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: "audit_data",
    createdAt: "created_at",
    updatedAt: false,
});
