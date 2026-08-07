import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";  //Import the auth routes
import productRoutes from "./routes/product.route.js";  //Import the product routes
import cartRoutes from "./routes/cart.route.js";  //Import the cart routes
import coupenRoutes from "./routes/coupen.route.js";  //Import the coupen routes

import { connectDB } from "./lib/db.js";

dotenv.config();  // Allow to read the content of .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // allow you to parse the body of the request as JSON
app.use(cookieParser());  // Allow to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupens", coupenRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});