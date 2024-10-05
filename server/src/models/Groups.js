import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Groups = sequelize.define(
  "Groups",
  {
    // Định nghĩa các trường
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Tên bảng User
        key: "id", // Cột khóa chính của bảng User
      },
      onDelete: "CASCADE", // Xóa bài viết khi người dùng bị xóa
      onUpdate: "CASCADE",
    },
  },
  {
    // Các tùy chọn khác
    tableName: "groups",
    timestamps: true,
  }
);

export default Groups;
