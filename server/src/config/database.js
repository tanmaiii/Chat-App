import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;

// Thiết lập kết nối MySQL
const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

// Kiểm tra kết nối
sequelize
  .authenticate()
  .then(() => console.log("Kết nối MySQL thành công"))
  .catch((err) => console.error("Không thể kết nối đến MySQL:", err));

export default sequelize;
