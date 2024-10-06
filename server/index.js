import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session"; // Change this line
import http from "http";
import passport from "passport";
import { dirname } from "path";
import { Server as SocketIo } from "socket.io";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import "./src/config/associations.js";
import sequelize from "./src/config/database.js";
import "./src/config/passport.js";
import routes from "./src/routes/index.js";
dotenv.config();

const port = 8000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cookieParser());

app.use(express.json());

// Set up CORS configuration
const io = new SocketIo(server, {
  cors: {
    origin: process.env.URL_FRONTEND, // or your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.use(
  session({
    name: "session",
    secret: "your-secret-key", // Change this line
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.URL_FRONTEND,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

sequelize
  .sync({ force: false })
  .then(() => console.log("Đồng bộ hóa models thành công"))
  .catch((err) => console.error("Lỗi khi đồng bộ hóa models:", err));

app.get("/", (req, res) => {
  return res.send("Xin chào");
});

app.use("/api/", routes);
// Thiết lập passport

// io.on("connection", (socket) => {
//   console.log("New client connected" + socket.id);

//   socket.emit("getId", socket.id);

//   socket.on("sendDataClient", function (data) {
//     console.log(data);
//     io.emit("sendDataServer", { data });
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
