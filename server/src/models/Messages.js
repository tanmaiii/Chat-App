import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Messages = sequelize.define(
  "Messages",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "groups",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "chat",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "messages",
    timestamps: true,
  }
);

export default Messages;
