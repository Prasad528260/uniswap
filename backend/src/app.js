import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";
import requestRouter from "./routes/requestRouter.js";
import notesRouter from "./routes/notesRouter.js";
import bookRouter from "./routes/bookRouter.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", notesRouter);
app.use("/", bookRouter);

const PORT = 5000;
connectDB()
  .then(() => {
    console.log("connected to mngodb successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} `);
    });
  })
  .catch((err) => {
    console.log("ERROR : FAILED TO CONNECT TO MONGODB ", err.messaage);
  });
