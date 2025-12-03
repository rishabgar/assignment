import express from "express";
import appError from "./utils/appError.js";
import globalErrorHandlerMiddleware from "./middlewares/globalErrorHandler.middleware.js";
import route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", route);

app.use((_req, _res, next) => {
  next(new appError(404, "Resource Not Found"));
});

app.use(globalErrorHandlerMiddleware);

export default app;
