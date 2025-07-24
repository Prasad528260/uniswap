import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";
import requestRouter from "./routes/requestRouter.js";
import bookRouter from "./routes/bookRouter.js";
import orderRouter from "./routes/orderRouter.js";
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/request", requestRouter);
app.use("/book", bookRouter);
app.use("/order", orderRouter);

const PORT = 5000;
connectDB()
  .then(() => {
    console.log("connected to mngodb successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR : FAILED TO CONNECT TO MONGODB ", err.messaage);
  });
