import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js"
import cors from "cors";
import cookieParser from "cookie-parser";
config();
const app = express();


// Middlewares
app.use(cors({ 
    origin: "http://localhost:5174", 
    credentials: true }));


app.disable("x-powered-by");
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;



