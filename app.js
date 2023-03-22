import express from "express";
import UserRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
    path: "./database/config.env"
})

//using middleware to use json
app.use(express.json());
app.use("/users", UserRouter);

