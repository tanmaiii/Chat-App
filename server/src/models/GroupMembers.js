import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const GroupMembers = sequelize.define(
  "GroupMembers",
  {
    // Định nghĩa các trường
    groupId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      references: {
        model: "groups",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    role: {
      type: DataTypes.ENUM("member", "admin"),
      default: "member",
    },
  },
  {
    tableName: "groupMembers",
    timestamps: true,
  }
);

export default GroupMembers;
