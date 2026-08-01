import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";  //Import the auth routes
import { connectDB } from "./lib/db.js";

dotenv.config();  // Allow to read the content of .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // allow you to parse the body of the request as JSON

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});