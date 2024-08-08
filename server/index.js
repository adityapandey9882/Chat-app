import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 9658
const databaseURL = process.env.DataBase_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,  //Enable the getting cookies
})
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);


mongoose.connect(databaseURL)
.then(() => console.log("DB connected successfully"))
.catch((err) => console.log("err.message"));


app.listen(PORT, () => {
    console.log(`App running successfully at http://localhost: ${PORT}`);
})
